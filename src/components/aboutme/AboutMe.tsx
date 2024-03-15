import React from 'react'
import ContactMe from '../buttons/ContactMe'

const AboutMe = (): React.ReactElement => {
  return (
    <div className='px-4 w-full h-dvh mt-10 -z-10'>
      <div className='h-full w-full'>
        <h2 className='w-[233px] h-[96px] text-3xl'>Acerca de mí</h2>
        <div className='bg-gradient rounded-xl min-w-[270px] h-[654px] shadow-xl flex flex-col items-center justify-center gap-8'>
          <div>
            <img className=' bg-black rounded-xl  min-w-[260px] h-[293px]' src="" alt="" />
          </div>
          <div className='flex flex-col items-center justify-center gap-5'>
            <h3 className='text-2xl font-[500]'>Coach Deportiva</h3>
            <p className=' text-center px-4'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. fdsf sdfsdfe sfegwqwegwg Culpa sed eligendi officia! Velit facilis corporis accusamus,</p>
          </div>

          <ContactMe text='Contactame!' link='sdfsfsf' />
        </div>
      </div>
    </div>
  )
}

export default AboutMe