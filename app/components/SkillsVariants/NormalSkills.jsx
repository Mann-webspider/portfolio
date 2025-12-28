
function NormalSkills() {
  return (
     <div>
        <section   className='xl:min-h-screen  max-w-[100vw] min-h-screen bg-background text-text font-[itcMedium] flex items-center '>
            <div className="content leading-32 w-full">
                <h4 className='uppercase xl:text-[1rem] xl:pl-64 md:text-[1.2rem] md:pl-20 text-[1.2rem] pl-10'>What i do</h4>
               
                  <Info title={"ui/ux"} desc={"I excel in crafting user-centric interfaces that blend intuitive design with seamless user experiences."}/>
                  <Info title={"website"} desc={"I specialize in creating the coolest and most engaging websites that leave a lasting impression. "}/>
                  <Info title={"branding"} desc={"I excel in visual branding, transforming concepts into captivating visuals that tell a compelling story."}/>
                  <Info title={"animation"} desc={"I'm skilled at creating captivating animations in Blender that bring ideas to life with precision and creativity"}/>
                
            </div>
        </section>
    </div>
  )
}

export default NormalSkills