"use client";

import { MantineProvider } from "@mantine/core";
import { Helmet, HelmetProvider } from "react-helmet-async";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <HelmetProvider>
        <Helmet>
          <title>Rohan Shah</title>
        </Helmet>
        <body>
          <MantineProvider>
            {children}
          </MantineProvider>
        </body>
      </HelmetProvider>
    </html>
  );
}
