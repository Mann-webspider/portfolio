import React from 'react'

function Footer() {
  return (
    <div>
        
        <section className='xl:min-h-[50vh] md:min-h-[20vh] font-[itcMedium] text-text bg-background xl:px-64 py-20 md:px-20 px-10'>
            <h4 className='text-xl py-12'>Links</h4>
            <div className='flex gap-[5rem] md:flex-row flex-col'>
                <div className='flex flex-col justify-center gap-6 '>
                    <div className="email">
                        <h4>Email</h4>
                        <a href='https://mail.google.com/mail' className='text-[#a99581]'>manndalsaniya.25@gmail.com</a>
                    </div>
                    <div className="phone">
                    <h4>Phone</h4>
                        <p>+91 82004 65927</p>
                    </div>
                </div>
                <div className='grid grid-cols-2 xl:text-4xl gap-6 md:text-3xl'>
                    <a href="" className='hover:text-primary duration-300'>Dribble</a>
                    <a href="" className='hover:text-primary duration-300'>Instagram</a>
                    <a href="" className='hover:text-primary duration-300'>Behance</a>
                    <a href="" className='hover:text-primary duration-300'>Twitter</a>
                    <a href="" className='hover:text-primary duration-300'>Linkedin</a>
                </div>
            </div>
        </section>
    </div>
  )
}

export default Footer