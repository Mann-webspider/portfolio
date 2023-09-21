import React from 'react'

function Cards(props) {
  return (
    <div>
        <div className='w-[588px] h-[588px] rounded-[20px]  relative'>
            <div className='absolute gradient w-full h-full p-8 flex hover:cursor-pointer rounded-[20px] '>
              <div className='flex justify-end flex-col text-[#d9d9d9] gap-5 mb-12 '>

               <h2 className='text-5xl uppercase font-[itcBold] '>{props.title}</h2>
               <p>{props.auther || "shelby"}</p>
              </div>
            </div>
            <img src={`/images/${props.img}.${props.format?props.format:"png"}`} alt=""  className=' w-full h-full object-cover rounded-[20px] z-20  hover:object-contain hover:cursor-pointer'/>
        </div>
    </div>
  )
}

export default Cards