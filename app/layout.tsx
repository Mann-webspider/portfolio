import type { Metadata } from "next";

import "./globals.css";

import SmoothScroll from "./providers/SmoothScroll";

 


export const metadata: Metadata = {
  title: "mann Protfolio",
  description: "Welcome to my personal portfolio website! I'm Mann Dalsaniya, a passionate full-stack web developer. Explore my projects, skills, and experience as you navigate through my site. Let's connect and create something amazing together!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={` antialiased`}
      >
        <SmoothScroll>{children}</SmoothScroll>
      
      </body>
    </html>
  );
}
