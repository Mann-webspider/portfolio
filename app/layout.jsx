
import AdminModal from '@/app/components/AdminModal'
import "./globals.css";

import SmoothScroll from "./providers/SmoothScroll";
import { ThemeProvider } from '@/app/components/ThemeProvider'
import ThemeToggle from '@/app/components/ThemeToggle'
import Navbar from './components/Navbar';

 


export const metadata = {
  title: "mann Protfolio",
  description: "Welcome to my personal portfolio website! I'm Mann Dalsaniya, a passionate full-stack web developer. Explore my projects, skills, and experience as you navigate through my site. Let's connect and create something amazing together!",
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
    userScalable: false,
  },
};

export default function RootLayout({
  children,
}) {
  return (
    <html lang="en">
    <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" />
      </head>
      <body
        className={`overflow-x-hidden antialiased`}
      >
        <SmoothScroll>
          <ThemeProvider>
      <ThemeToggle />
      <Navbar/>
          {children}
          <AdminModal />
          </ThemeProvider>
       
          </SmoothScroll>
      </body>
    </html>
  );
}
