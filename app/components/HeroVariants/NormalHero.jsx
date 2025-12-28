'use client'
import Image from "next/image"
import Link from "next/link"
import { useEffect, useRef, useState } from "react"
import IntroLoader from "../IntroLoader"

import { gsap } from 'gsap'
function NormalHero() {
    const [showLoader, setShowLoader] = useState(true)
  const heroRef = useRef(null)

  useEffect(() => {
    if (!showLoader) {
      gsap.from('.hero-item', {
        y: 100,
        opacity: 0,
        duration: 1.2,
        stagger: 0.15,
        ease: 'power4.out',
      })
    }
  }, [showLoader])
  return (
      <div
        ref={heroRef}
        className="p-10 bg-background min-h-screen text-text font-[itcMedium]"
        data-scroll-container
      >
        
        {showLoader && <IntroLoader onComplete={() => setShowLoader(false)} />}

        <main className="min-h-screen flex" data-scroll-section>
          <div className="content w-full h-full relative">
            <div className="text-content flex flex-col justify-center absolute top-24 xl:left-48 md:left-32 z-10">
              <h2 className="text-text xl:text-[5rem] md:text-[3rem] text-4xl">
                I am <br />
                <span className="text-primary xl:text-[7.5rem] md:text-[4rem] text-7xl flex ">
                  Mann Dalsaniya
                </span>
              </h2>

              <p className="xl:w-130 xl:mt-36 md:mt-36 mt-96 w-[18rem]">
                I'm a passionate full-stack web developer with a love for clean
                code and creative solutions. Explore my projects and discover
                how I turn ideas into digital reality
              </p>
            </div>

            <div className="images xl:right-36 xl:top-36 absolute md:top-96 md:right-36 top-36 right-6">
              <Image
                src="/images/my-photo.jpg"
                alt="my-pic"
                className="xl:w-92 object-cover xl:h-[31.2rem] md:w-92 md:h-[31.2rem] w-56 h-96"
                width={200}
                height={200}
              />
            </div>
          </div>

          <div className="social-icon hidden xl:flex flex-col-reverse">
            <ul className="flex xl:flex-col gap-8 flex-row">
              {[
                { href: "https://twitter.com/MannDalsaniya07", icon: "/images/twitter.svg" },
                { href: "https://www.instagram.com/thenixshelby/", icon: "/images/instagram.svg" },
                { href: "https://github.com/Mann-webspider", icon: "/images/github.svg" } ,
              ].map((item, i) => (
                <li key={i}>
                  <Link href={item.href} target="_blank" rel="noreferrer">
                    <Image
                      src={item.icon}
                      alt="social-icon"
                      className="xl:w-6 xl:h-6 h-12 w-12"
                      width={24}
                      height={24}
                    />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </main>
      </div> 
  )
}

export default NormalHero