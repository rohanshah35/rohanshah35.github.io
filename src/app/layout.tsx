"use client";

import { MantineProvider } from "@mantine/core";
import { HelmetProvider } from "react-helmet-async";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <HelmetProvider>
          <MantineProvider>
            {children}
          </MantineProvider>
        </HelmetProvider>
      </body>
    </html>
  );
}
