import { Product } from '@/sanity.types'

import React from 'react'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from './ui/accordion'

const ProductCharacteristics = ({product}:{product: Product}) => {
  return (
   <Accordion type="single" collapsible>
    <AccordionItem value="item-1">
        <AccordionTrigger>
            {product?.name}: Characteristics
        </AccordionTrigger>
        <AccordionContent className="flex flex-col gap-1">
            <p className="flex items-center justify-between">Brand: <span>Unknown</span></p>
            <p className="flex items-center justify-between">Depth: <span>{product?.dimensions?.depth}</span></p>
            <p className="flex items-center justify-between">Height: <span>{product?.dimensions?.height}</span></p>
            <p className="flex items-center justify-between">Width: <span>{product?.dimensions?.width}</span></p>
            <p className="flex items-center justify-between">Features: <span>{product?.features?.features}</span></p>
            <p className="flex items-center justify-between">Made: <span>{product?.features?.made}</span></p>
            <p className="flex items-center justify-between">Quality: <span>{product?.features?.quality}</span></p>
            <p className="flex items-center justify-between">Quantity: <span>{product?.quantity}</span></p>
        </AccordionContent>
    </AccordionItem>
   </Accordion>
 )
}



export default ProductCharacteristics
