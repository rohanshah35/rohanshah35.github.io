"use client";
import React, { useState, useEffect } from "react";
import { Box, Group, Text } from "@mantine/core";
import { Squash as Hamburger } from "hamburger-react";
import classes from "./header.module.css";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleSmoothScroll = (event: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    event.preventDefault();
    const target = document.getElementById(targetId);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setIsOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <Box className={classes.header}>
      <Group justify="space-between" align="center" className={classes.container}>
        <Group align="center" gap="sm">
          <a href="/" className={classes.rs}>
            RS
          </a>
        </Group>

        <Group gap="lg" className={`${classes.navLinks} ${classes.desktopNav}`}>
          {["about", "journey", "projects", "skills", "contact"].map((item, index) => (
            <Text
              key={item}
              component="a"
              href={`#${item}`}
              className={classes.link}
              onClick={(e) => handleSmoothScroll(e, item)}
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <span className={classes.bracket}>&lt;</span> {item.charAt(0).toUpperCase() + item.slice(1)} <span className={classes.bracket}>&gt;</span>
            </Text>
          ))}
        </Group>

        <div className={classes.hamburger}>
          <Hamburger toggled={isOpen} toggle={handleToggle} size={20} />
        </div>
      </Group>

      <div className={`${classes.drawer} ${isOpen ? classes.open : ""}`}>
        {["about", "journey", "projects", "skills", "contact"].map((item) => (
          <Text
            key={item}
            component="a"
            href={`#${item}`}
            className={classes.menuItem}
            onClick={(e) => handleSmoothScroll(e, item)}
          >
            <span className={classes.bracket}>&lt;</span> {item.charAt(0).toUpperCase() + item.slice(1)} <span className={classes.bracket}>&gt;</span>
          </Text>
        ))}
      </div>
    </Box>
  );
};

export default Header;
