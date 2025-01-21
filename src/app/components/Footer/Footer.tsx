"use client";

import React from "react";
import { Box, Text, Center } from "@mantine/core";
import classes from "./footer.module.css";

const Footer = () => {
  return (
    <Box className={classes.footer}>
      <Center>
        <Text className={classes.footerText}>
          Made with <span className={classes.heart}>❤️</span> by Rohan Shah
        </Text>
      </Center>
    </Box>
  );
};

export default Footer;
