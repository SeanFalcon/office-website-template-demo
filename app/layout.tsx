import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: {
    default: "LemonCat Office - 开源官网开发模板",
    template: "%s - LemonCat Office",
  },
  description: "开源、高性能、可复用且带优质动画效果的官网开发模板，基于Next.js 14+和Shadcn UI构建，助力企业快速构建现代化官网。",
  keywords: ["Next.js", "Shadcn UI", "官网模板", "开源", "动画效果", "高性能", "响应式设计"],

  openGraph: {
    type: "website",
    locale: "zh_CN",
    url: "https://example.com",
    title: "LemonCat Office - 开源官网开发模板",
    description: "开源、高性能、可复用且带优质动画效果的官网开发模板，基于Next.js 14+和Shadcn UI构建，助力企业快速构建现代化官网。",
    siteName: "LemonCat Office",
    images: [
      {
        url: "https://example.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "LemonCat Office - 开源官网开发模板",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    site: "@aioffice",
    creator: "@aioffice",
    title: "LemonCat Office - 开源官网开发模板",
    description: "开源、高性能、可复用且带优质动画效果的官网开发模板，基于Next.js 14+和Shadcn UI构建，助力企业快速构建现代化官网。",
    images: ["https://example.com/og-image.jpg"],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  generator: "Next.js",
  applicationName: "LemonCat Office",
  referrer: "origin-when-cross-origin",
  authors: [{ name: "LemonCat Office Team" }],
  creator: "LemonCat Office Team",
  publisher: "LemonCat Office Team",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://example.com"),
  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN" className="scroll-smooth">
      <body
        className={`${inter.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
