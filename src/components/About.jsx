import React from 'react'

function About() {
  return (
    <div>
        <section className='min-h-[100vh] bg-background text-text font-[itcMedium] flex items-center xl:pl-64 md:pl-40 sm:pl-20'>
            <div className="content leading-[8rem]">
                <h4 className='uppercase text-[1rem]'>About me</h4>
                <h2 className='xl:text-[4rem] md:text-[2rem] sm:text-[3rem] sm:leading-[3rem] leading-[4rem] xl:w-4/6 sm:w-4/4'>I’m a web <span className='text-primary'>developer</span> focusing on creating new design and innovation.</h2>
            </div>
        </section>
    </div>
  )
}

export default About