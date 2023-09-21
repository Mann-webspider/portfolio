import React from 'react'
import Cards from './Cards'
function Works() {
  return (
    <div>
        <section className='text-text font-[itcMedium] bg-background min-h-[100vh] px-20'>
            <h2 className='font-[itcBold] text-[3rem] uppercase py-12'> My works</h2>

            <div className="cards grid xl:grid-cols-2 gap-6 sm:grid-cols-1 md:grid-cols-1 mx-auto  place-items-center">
                <Cards title={"e-comm"} img={"e-comm"} ></Cards>
                <Cards title={"Nuephormium"} img={"nuemorphism"}></Cards>
                <Cards title={"rps"} img={"rps"} format={"jpg"}></Cards>
                <Cards title={"portfolio"} img={"portfolio"}></Cards>
            </div>
        </section>
    </div>
  )
}

export default Works