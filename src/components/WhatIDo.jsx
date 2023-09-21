import React from 'react'
import Info from './Info'

function WhatIDo() {
  
  return (
    <div>
        <section className='xl:min-h-[100vh]  max-w-[100vw] min-h-[100vh] bg-background text-text font-[itcMedium] flex items-center '>
            <div className="content leading-[8rem] w-full">
                <h4 className='uppercase xl:text-[1rem] xl:pl-64 md:text-[1.2rem] md:pl-20 text-[1.2rem] pl-10'>What i do</h4>
               
                  <Info title={"ui/ux"} desc={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,"}/>
                  <Info title={"website"} desc={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,"}/>
                  <Info title={"branding"} desc={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,"}/>
                  <Info title={"animation"} desc={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,"}/>
                
            </div>
        </section>
    </div>
  )
}

export default WhatIDo