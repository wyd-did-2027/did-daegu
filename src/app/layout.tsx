import type { Metadata } from "next";

import SmoothScrolling from "@/components/smooth-scroll";
import localFont from "next/font/local";

import "./globals.css";

const pretendard = localFont({
  src: [
    {
      path: "fonts/Pretendard-Regular.subset.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "fonts/Pretendard-Medium.subset.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "fonts/Pretendard-Bold.subset.woff2",
      weight: "700",
      style: "normal",
    },
  ],
  display: "swap",
  preload: true,
  variable: "--font-pretendard",
  fallback: ["system-ui", "-apple-system", "BlinkMacSystemFont", "sans-serif"],
});

export const metadata: Metadata = {
  title: "WYD SEOUL 2027 DID DAEGU",
  description: "WYD SEOUL 2027 DID DAEGU 공식 웹사이트",
};

export default function RootLayout({
  children,
  modal,
}: Readonly<{
  children: React.ReactNode;
  modal: React.ReactNode;
}>) {
  return (
    <html lang="ko" className="lenis lenis-smooth">
      <body className={pretendard.className}>
        <SmoothScrolling>{children}</SmoothScrolling>
        {modal}
        <div id="modal-root" />
      </body>
    </html>
  );
}
