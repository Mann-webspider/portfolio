import {React} from "react";



function Hero() {
  
  return (
    <div className="p-[40px] bg-background min-h-[100vh] text-text font-[itcMedium] " data-scroll-container>
      <nav className="flex justify-between " >
        <div className="logo uppercase font-[itcBold]">shelby</div>
        <div className="menus ">
          <ul className="flex gap-4">
            <li>
              <a href="#about">

              about
              </a>
            </li>
            <li>
              <a href="#contact">

              contact
              </a>
            </li>
            <li>
              <a href="#works">

              work
              </a>
            </li>
          </ul>
        </div>
      </nav>
      <main className="min-h-[100vh] flex" data-scroll-section >
      {/* <div className="cta xl:items-center xl:justify-center xl:flex xl:w-fit  m-0 p-0 sm:hidden">
          <span className="xl:rotate-90 xl:w-24 sm:hidden md:block hidden xl:block ">since 2020</span>   
        </div> */}
        <div className="content w-full  h-full  relative ">
          <div className="text-content  flex flex-col justify-center absolute   top-24 xl:left-48 md:left-32   z-10  ">
            <h2 className="text-text xl:text-[5rem] xl:leading-[7rem] md:text-[3rem] text-[2rem]">
              I am <br />
              <span className="text-primary xl:text-[7.5rem] md:text-[4rem] lg:text-[4rem] text-[2rem]">Mann Dalsaniya</span>
            </h2>
            <p className="xl:w-[32.5rem] font-[1rem] xl:mt-36 md:mt-36 md:w-[32.5rem] mt-96 w-[18rem]">
              I'm a passionate full-stack web developer with a love for clean
              code and creative solutions. Explore my projects and discover how
              I turn ideas into digital reality
            </p>
          </div>
          <div className="images  xl:right-36 xl:top-36 absolute md:top-96 md:right-36 top-36 right-6">
            <img
              src="/images/my-photo.jpg"
              alt="my-pic"
              className="xl:w-[23rem] object-cover xl:h-[31.2rem] md:w-[23rem] md:h-[31.2rem] w-[14rem] h-[24rem]"
            />
          </div>
        </div>
        
        <div className="social-icon hidden  xl:flex flex-col-reverse">
          <ul className="flex xl:flex-col gap-8 flex-row">
            <li>
              <a href="https://twitter.com/MannDalsaniya07" target="_blank" rel="noreferrer">

              <img
                src={"/images/twitter.svg"}
                alt="twiiter-icon"
                className="xl:w-6 xl:h-6 h-12 w-12"
                />
                </a>
            </li>
            <li>
              <a href="https://www.instagram.com/thenixshelby/" target="_blank" rel="noreferrer">

              <img
                src={"/images/instagram.svg"}
                alt="instagram-icon"
                className="xl:w-6 xl:h-6 h-12 w-12"
                />
                </a>
            </li>
            <li>
              <a href="https://github.com/Mann-webspider" target="_blank" rel="noreferrer">

              <img
                src={"/images/github.svg"}
                alt="github-icon"
                className="xl:w-6 xl:h-6 h-12 w-12"
                />
                </a>
            </li>
          </ul>
        </div>  
      </main>
    </div>
  );
}

export default Hero;
