import React from 'react'
import CardServices from './CardServices'

const ServicesPage = (): React.ReactElement => {
  return (
    <div className='w-full' id='services'>
      <div>
        <h1 className='text-[32px] mx-4'>Mis servicios</h1>
        
        <CardServices />
      </div>
    </div>
  )
}

export default ServicesPage