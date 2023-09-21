import React from 'react'

function Cards(props) {
  return (
    <div>
        <div className='xl:w-[36.75rem] xl:h-[36.75rem] md:w-[36.75rem] md:h-[36.75rem] w-[20rem] h-[20rem] rounded-[20px]  relative'>
            <div className='absolute gradient w-full h-full md:p-8 p-4 flex hover:cursor-pointer rounded-[20px] '>
              <div className='flex justify-end flex-col text-[#d9d9d9] md:gap-5 md:mb-12 '>

               <h2 className='md:text-5xl uppercase font-[itcBold] text-2xl'>{props.title}</h2>
               <p>{props.auther || "shelby"}</p>
              </div>
            </div>
            <img src={`/images/${props.img}.${props.format?props.format:"png"}`} alt=""  className=' w-full h-full object-cover rounded-[20px] z-20  hover:object-contain hover:cursor-pointer'/>
        </div>
    </div>
  )
}

export default Cards