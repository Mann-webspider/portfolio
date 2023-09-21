import React from 'react'
import Cards from './Cards'
function Works() {
  return (
    <div>
        <section   className='text-text font-[itcMedium] bg-background min-h-[100vh] md:px-20 py-20' id='works'>
            <h2 className='font-[itcBold] xl:text-[3rem] md:text-[2rem] uppercase py-12 px-10'> My works</h2>

            <div className="cards grid xl:grid-cols-2 gap-6 sm:grid-cols-1 md:grid-cols-1 mx-auto  place-items-center">
                <Cards title={"e-comm"} img={"e-comm"} links={"https://mann-webspider.github.io/ecommerce-product-page/"}></Cards>
                <Cards title={"Nuephormium"} img={"nuemorphism"} links={""}></Cards>
                <Cards title={"rps"} img={"rps"} format={"jpg"}></Cards>
                <Cards title={"portfolio"} img={"portfolio"}></Cards>
            </div>
        </section>
    </div>
  )
}

export default Works