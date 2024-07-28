import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Providers } from "./providers";
import "./globals.css";

export const metadata: Metadata = {
  title: "Hot Source",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="flex w-full justify-center" suppressHydrationWarning>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
