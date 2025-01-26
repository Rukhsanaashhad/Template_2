import React from 'react'
import Title from './Title'

const HomeBanner = () => {
  return (
    <div className="flex items-center flex-col justify-between gap-5">
     <Title className="text-3xl md:text-4xl uppercase font-bold text-center">Best Furnitures
       </Title>
       <p className="text-sm text-center text-lightColor/80 font-medium max-w-[480px]">Find everything you need to look and feel your best, and shop the latest inventory&apos;s fashion
         and comfortable products
       </p>
    </div>
  )
}

export default HomeBanner
