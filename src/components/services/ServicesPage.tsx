import React from 'react'
import CardServices from './CardServices'

const ServicesPage = (): React.ReactElement => {
  return (
    <div className='w-full' id='services'>
      <div>
        <h1 className='text-[32px] lg:text-[55px] text-texts-color mx-4 lg:mx-10' data-aos="fade-right" data-aos-duration="800">Mis servicios</h1>
        
        <div className='w-full flex justify-center'>
          <CardServices />
        </div>
      </div>
    </div>
  )
}

export default ServicesPage