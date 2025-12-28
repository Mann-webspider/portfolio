
import AdminModal from '@/app/components/AdminModal'
import "./globals.css";

import SmoothScroll from "./providers/SmoothScroll";
import { ThemeProvider } from '@/app/components/ThemeProvider'
import ThemeToggle from '@/app/components/ThemeToggle'
import Navbar from './components/Navbar';

 


export const metadata = {
  title: "mann Protfolio",
  description: "Welcome to my personal portfolio website! I'm Mann Dalsaniya, a passionate full-stack web developer. Explore my projects, skills, and experience as you navigate through my site. Let's connect and create something amazing together!",
};

export default function RootLayout({
  children,
}) {
  return (
    <html lang="en">
      <body
        className={` antialiased`}
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
