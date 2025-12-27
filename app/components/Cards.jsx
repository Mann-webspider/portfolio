import React, { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

gsap.registerPlugin(useGSAP)

function Cards(props) {
  const cardRef = useRef()
  const imageRef = useRef()
  const textRef = useRef()

  useGSAP(() => {
    // Parallax effect on hover
    const handleMouseMove = (e) => {
      const rect = cardRef.current.getBoundingClientRect()
      const x = e.clientX - rect.left
      const y = e.clientY - rect.top
      const centerX = rect.width / 2
      const centerY = rect.height / 2
      const rotateX = (y - centerY) / 20
      const rotateY = (centerX - x) / 20

      gsap.to(cardRef.current, {
        rotationX: rotateX,
        rotationY: rotateY,
        duration: 0.5,
        ease: 'power2.out',
        transformPerspective: 1000,
      })

      gsap.to(imageRef.current, {
        x: (x - centerX) / 10,
        y: (y - centerY) / 10,
        duration: 0.5,
      })
    }

    const handleMouseLeave = () => {
      gsap.to(cardRef.current, {
        rotationX: 0,
        rotationY: 0,
        duration: 0.5,
        ease: 'power2.out',
      })

      gsap.to(imageRef.current, {
        x: 0,
        y: 0,
        duration: 0.5,
      })

      gsap.to(textRef.current, {
        y: 0,
        opacity: 1,
        duration: 0.3,
      })
    }

    const handleMouseEnter = () => {
      gsap.to(textRef.current, {
        y: -5,
        opacity: 1,
        duration: 0.3,
      })
    }

    cardRef.current?.addEventListener('mousemove', handleMouseMove)
    cardRef.current?.addEventListener('mouseleave', handleMouseLeave)
    cardRef.current?.addEventListener('mouseenter', handleMouseEnter)

    return () => {
      cardRef.current?.removeEventListener('mousemove', handleMouseMove)
      cardRef.current?.removeEventListener('mouseleave', handleMouseLeave)
      cardRef.current?.removeEventListener('mouseenter', handleMouseEnter)
    }
  }, { scope: cardRef })

  return (
    <div>
      <div 
        ref={cardRef}
        className='xl:w-[36.75rem] xl:h-[36.75rem] md:w-[36.75rem] md:h-[36.75rem] w-[20rem] h-[20rem] rounded-[20px] relative overflow-hidden'
        style={{ transformStyle: 'preserve-3d' }}
      >
        <a href={props.links || '#'} target='_blank' rel='noreferrer'>
          <div className='absolute gradient w-full h-full md:p-8 p-4 flex hover:cursor-pointer rounded-[20px] z-10'>
            <div 
              ref={textRef}
              className='flex justify-end flex-col text-[#d9d9d9] md:gap-5 md:mb-12'
            >
              <h2 className='md:text-5xl uppercase font-[itcBold] text-2xl'>
                {props.title}
              </h2>
              <p>{props.auther || "shelby"}</p>
            </div>
          </div>

          <img 
            ref={imageRef}
            src={`/images/${props.img}.${props.format ? props.format : "png"}`} 
            alt={props.title}  
            className='w-full h-full object-cover rounded-[20px] hover:object-contain hover:cursor-pointer'
          />
        </a>
      </div>
    </div>
  )
}

export default Cards
