import React from "react";

function Hero() {
  return (
    <div className="p-[40px] bg-background min-h-[100vh] text-text font-[itcMedium] ">
      <nav className="flex justify-between ">
        <div className="logo uppercase font-[itcBold]">shelby</div>
        <div className="menus ">
          <ul className="flex gap-4">
            <li>
              about
            </li>
            <li>
              contact
            </li>
            <li>
              work
            </li>
          </ul>
        </div>
      </nav>
      <main className="h-[100%] flex">
        <div className="social-icon  h-[90vh] flex flex-col-reverse">
          <ul className="flex flex-col gap-8">
            <li>
              <img
                src={"/images/twitter.svg"}
                alt="twiiter-icon"
                className="w-6 h-6"
              />
            </li>
            <li>
              <img
                src={"/images/instagram.svg"}
                alt="instagram-icon"
                className="w-6 h-6"
              />
            </li>
            <li>
              <img
                src={"/images/github.svg"}
                alt="github-icon"
                className="w-6 h-6"
              />
            </li>
          </ul>
        </div>
        <div className="content w-full  h-full  relative ">
          <div className="text-content  flex flex-col justify-center absolute  top-24 xl:left-48 md:left-32   z-10  ">
            <h2 className="text-text xl:text-[5rem] xl:leading-[7rem] md:text-[3rem] sm:text-[3rem]">
              I am <br />
              <span className="text-primary xl:text-[7.5rem] md:text-[4rem] lg:text-[4rem] ">Mann Dalsaniya</span>
            </h2>
            <p className="w-[32.5rem] font-[1rem] mt-36 ">
              I'm a passionate full-stack web developer with a love for clean
              code and creative solutions. Explore my projects and discover how
              I turn ideas into digital reality
            </p>
          </div>
          <div className="images  right-36 xl:top-36 absolute md:top-96">
            <img
              src="/images/my-photo.jpg"
              alt="my-photo"
              className="w-[376px] object-cover h-[499px] "
            />
          </div>
        </div>
        <div className="cta items-center justify-center flex w-fit  m-0 p-0">
          <span className="-rotate-90 w-24  ">since 2020</span>   
        </div>
      </main>
    </div>
  );
}

export default Hero;
