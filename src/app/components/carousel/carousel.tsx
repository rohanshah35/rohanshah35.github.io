import React, { useEffect, useState } from "react";
import { Carousel as MantineCarousel } from "@mantine/carousel";
import type { EmblaCarouselType } from "embla-carousel";
import { Modal, Box, Typography, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { IconBrandGithub } from "@tabler/icons-react";
import styles from "./carousel.module.css";
import { useAnimateOnScroll } from "@/app/components/useAnimateOnScroll";

const AUTO_SCROLL_DELAY = 2000;

export interface Slide {
  title: string;
  blurb: string;
  description: string;
  githubLink: string;
  image: string;
  techStack?: string;
}

export interface CarouselProps {
  slides: Slide[];
}

const Carousel: React.FC<CarouselProps> = ({ slides }) => {
  const [embla, setEmbla] = useState<EmblaCarouselType | null>(null);
  const [hovered, setHovered] = useState(false);
  const [open, setOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  const [containerRef, containerInView] = useAnimateOnScroll<HTMLDivElement>();

  useEffect(() => {
    const updateIsMobile = () => {
      setIsMobile(window.innerWidth <= 768); // Adjust the breakpoint as needed
    };

    updateIsMobile(); // Initial check
    window.addEventListener("resize", updateIsMobile);

    return () => {
      window.removeEventListener("resize", updateIsMobile);
    };
  }, []);

  const handleOpenModal = (index: number) => {
    setActiveIndex(index);
    setOpen(true);
  };

  const handleCloseModal = () => {
    setActiveIndex(null);
    setOpen(false);
  };

  useEffect(() => {
    if (!embla || hovered) return;

    const interval = setInterval(() => {
      if (embla.canScrollNext()) {
        embla.scrollNext();
      } else {
        embla.scrollTo(0);
      }
    }, AUTO_SCROLL_DELAY);

    return () => clearInterval(interval);
  }, [embla, hovered]);

  return (
    <div
      ref={containerRef}
      className={`${styles.embla} ${containerInView ? styles.animate : ""}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <h2 className={styles.embla__title}>03. PROJECTS</h2>

      <MantineCarousel
        loop={false}
        unstyled
        withControls={false}
        getEmblaApi={(api) => setEmbla(api as EmblaCarouselType)}
        withIndicators={false}
        classNames={{
          viewport: styles.embla__viewport,
          container: styles.embla__container,
          slide: styles.embla__slide,
        }}
      >
        {slides.map((slide, index) => (
          <MantineCarousel.Slide key={index}>
            {isMobile ? (
              <a
                href={slide.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.embla__slide__inner}
              >
                <img
                  className={styles.embla__slide__img}
                  src={slide.image}
                  alt={slide.title}
                />
              </a>
            ) : (
              <div
                className={styles.embla__slide__inner}
                onClick={() => handleOpenModal(index)}
              >
                <img
                  className={styles.embla__slide__img}
                  src={slide.image}
                  alt={slide.title}
                />
              </div>
            )}
            <div className={styles.embla__slide__caption}>
              <Typography
                variant="h6"
                sx={{
                  fontFamily: "Roboto Mono, monospace",
                  fontSize: "14px",
                  fontWeight: 600,
                  color: "#fff",
                }}
              >
                {slide.title}
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  fontFamily: "Inter, sans-serif",
                  fontSize: "12px",
                  color: "#ccc",
                  marginTop: "0.5rem",
                }}
              >
                {slide.blurb}
              </Typography>
            </div>
          </MantineCarousel.Slide>
        ))}
      </MantineCarousel>

      {!isMobile && (
        <Modal open={open} onClose={handleCloseModal}>
          <Box
            sx={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: "800px",
              height: "400px",
              bgcolor: "#2d2d2d",
              boxShadow: 24,
              borderRadius: "10px",
              padding: "2rem",
            }}
          >
            <IconButton
              aria-label="close"
              onClick={handleCloseModal}
              sx={{
                position: "absolute",
                top: "1rem",
                right: "1rem",
                color: "#ff4d4d",
              }}
            >
              <CloseIcon />
            </IconButton>

            {typeof activeIndex === "number" && (
              <>
                <Box sx={{ mb: "1rem" }}>
                  <Typography
                    variant="h5"
                    sx={{
                      fontFamily: "Roboto Mono, monospace",
                      fontSize: "24px",
                      fontWeight: 700,
                      color: "#fff",
                      mb: "1rem",
                    }}
                  >
                    {slides[activeIndex].title}
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{
                      fontFamily: "Inter, sans-serif",
                      fontSize: "16px",
                      color: "#d4d4d4",
                      lineHeight: 1.6,
                    }}
                  >
                    {slides[activeIndex].description}
                  </Typography>
                  {slides[activeIndex].techStack && (
                    <Typography
                      variant="body2"
                      sx={{
                        fontFamily: "Roboto Mono, monospace",
                        fontSize: "14px",
                        color: "#d4d4d4",
                        mt: "1rem",
                      }}
                    >
                      <strong>Tech Stack:</strong> {slides[activeIndex].techStack}
                    </Typography>
                  )}
                </Box>

                <IconButton
                  href={slides[activeIndex].githubLink}
                  target="_blank"
                  sx={{
                    position: "absolute",
                    bottom: "2rem",
                    left: "2rem",
                    backgroundColor: "#ff4d4d",
                    color: "white",
                    borderRadius: "50%",
                    width: "45px",
                    height: "45px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    "&:hover": { backgroundColor: "#e04444" },
                  }}
                >
                  <IconBrandGithub size={24} />
                </IconButton>
              </>
            )}
          </Box>
        </Modal>
      )}
    </div>
  );
};

export default Carousel;