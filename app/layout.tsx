import type { Metadata } from "next";
import { ThemeProvider } from "next-themes";
import "./globals.css";

export const metadata: Metadata = {
  title: "Alex Morgan — Full-Stack Engineer",
  description:
    "Full-stack engineer specializing in React, Next.js, and Node.js. Building fast, beautiful, and scalable web experiences.",
  keywords: [
    "full-stack engineer",
    "React developer",
    "Next.js",
    "TypeScript",
    "web development",
    "portfolio",
  ],
  authors: [{ name: "Alex Morgan" }],
  creator: "Alex Morgan",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://alexmorgan.dev",
    title: "Alex Morgan — Full-Stack Engineer",
    description:
      "Full-stack engineer specializing in React, Next.js, and Node.js. Building fast, beautiful, and scalable web experiences.",
    siteName: "Alex Morgan Portfolio",
    images: [
      {
        url: "/images/og-portfolio-preview.jpg",
        width: 1200,
        height: 630,
        alt: "Alex Morgan Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Alex Morgan — Full-Stack Engineer",
    description:
      "Full-stack engineer specializing in React, Next.js, and Node.js.",
    images: ["/images/og-portfolio-preview.jpg"],
    creator: "@alexmorgan",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange={false}
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
