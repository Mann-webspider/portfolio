import React from 'react'

function About() {
  return (
    <div>
        <section   className='xl:min-h-[100vh] md:min-h-[50vh] min-h-[60vh] bg-background text-text font-[itcMedium] flex items-center xl:pl-64 md:pl-30 pl-10' id='about'>
            <div className="content leading-[8rem]">
                <h4 className='uppercase xl:text-[1rem] md:text-[1.2rem] text-[1.2rem]'>About me</h4>
                <h2 className='xl:text-[4rem] md:text-[3rem] sm:text-[3rem] sm:leading-[3rem]  xl:leading-[4rem] xl:w-4/6 w-4/4 text-[2rem] leading-10'>I’m a web <span className='text-primary'>developer</span> focusing on creating new design and innovation.</h2>
            </div>
        </section>
    </div>
  )
}

export default About