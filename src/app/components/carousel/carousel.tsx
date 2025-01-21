"use client";

import React, { useEffect, useState } from "react";
import { Carousel as MantineCarousel } from "@mantine/carousel";
import { Modal, Box, Typography, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { IconBrandGithub } from "@tabler/icons-react";
import styles from "./carousel.module.css";
import { useAnimateOnScroll } from "@/app/components/useAnimateOnScroll";
import type { EmblaCarouselType } from 'embla-carousel';

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

  const [embla] = useState<EmblaCarouselType | null>(null);
  const [hovered, setHovered] = useState(false);
  const [open, setOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const [containerRef, containerInView] = useAnimateOnScroll<HTMLDivElement>();

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

  // const lastWheelTimeRef = useRef<number>(0);
  // const accumulatedDeltaRef = useRef<number>(0);

  // const EDGE_BUFFER_TIMEOUT = 100;
  // const EDGE_BUFFER_DELTA = 200;

  // const handleWheel = useCallback(
  //   (e: WheelEvent | ReactWheelEvent<HTMLDivElement>) => {
  //     if (!embla) return;

  //     const now = Date.now();

  //     if (now - lastWheelTimeRef.current > EDGE_BUFFER_TIMEOUT) {
  //       accumulatedDeltaRef.current = 0;
  //     }
  //     lastWheelTimeRef.current = now;

  //     if (e.deltaY > 0) {
  //       if (embla.canScrollNext()) {
  //         accumulatedDeltaRef.current = 0;
  //         embla.scrollNext();
  //         e.preventDefault();
  //         e.stopPropagation();
  //       } else {
  //         accumulatedDeltaRef.current += e.deltaY;
  //         if (accumulatedDeltaRef.current < EDGE_BUFFER_DELTA) {
  //           e.preventDefault();
  //           e.stopPropagation();
  //         } else {
  //           accumulatedDeltaRef.current = 0;
  //         }
  //       }
  //     } else if (e.deltaY < 0) {
  //       if (embla.canScrollPrev()) {
  //         accumulatedDeltaRef.current = 0;
  //         embla.scrollPrev();
  //         e.preventDefault();
  //         e.stopPropagation();
  //       } else {
  //         accumulatedDeltaRef.current += Math.abs(e.deltaY);
  //         if (accumulatedDeltaRef.current < EDGE_BUFFER_DELTA) {
  //           e.preventDefault();
  //           e.stopPropagation();
  //         } else {
  //           accumulatedDeltaRef.current = 0;
  //         }
  //       }
  //     }
  //   },
  //   [embla]
  // );

  // useEffect(() => {
  //   const node = containerRef.current;
  //   if (!node) return;
  //   node.addEventListener("wheel", handleWheel, { passive: false });
  //   return () => node.removeEventListener("wheel", handleWheel);
  // }, [handleWheel, containerRef]);

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
        withIndicators={false}
        classNames={{
          viewport: styles.embla__viewport,
          container: styles.embla__container,
          slide: styles.embla__slide,
        }}
      >
        {slides.map((slide, index) => (
          <MantineCarousel.Slide key={index}>
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
    </div>
  );
};

export default Carousel;
