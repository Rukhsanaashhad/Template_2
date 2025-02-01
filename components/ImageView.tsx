"use client";

import React, { useState } from 'react'
import {motion,AnimatePresence} from 'motion/react';  
import Image from 'next/image';
import { urlFor } from '@/sanity/lib/image';



const ImageView = ({ image = [] }: any  ) => {
 
    const [active]= useState(image= image)  
  return (
    <div className="w-full md:w-1/2 space-y-2 md:space-y-4">
     <AnimatePresence mode='wait'>
        <motion.div className="w-full max-h-[550px] min-h-[450px] border border-darkColor/10 rounded-md group overflow-hidden">
            <Image src={urlFor(active).url()} alt="product Image"
            width={700}
            height={700}
            priority
            className=" bg-gray-300 max-h-[550px] min-h-[500px] object-contain group-hover:scale-110 hoverEffect rounded-md"
            />
        </motion.div>
     </AnimatePresence>                  
    
    </div>
  )
}

export default ImageView


{/*
"use client";
import {
  internalGroqTypeReferenceTo,
  SanityImageCrop,
  SanityImageHotspot,
} from "@/sanity.types";
import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";

interface Props {
  image?: Array<{
    asset?: {
      _ref: string;
      _type: "reference";
      _weak?: boolean;
      [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
    };
    hotspot?: SanityImageHotspot;
    crop?: SanityImageCrop;
    _type: "image";
    _key: string;
  }>;
}
const ImageView = ({ image = [0] }: Props) => {
  const [active, setActive] = useState(image);
  return (
    <div className="w-full md:w-1/2 space-y-2 md:space-y-4">
      <AnimatePresence mode="wait">
        <motion.div
          key={active}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full max-h-[550px] min-h-[450px] border border-darkColor/10 rounded-md group overflow-hidden"
        >
          <Image
            src={urlFor(active).url()}
            alt="productImage"
            width={700}
            height={700}
            priority
            className="w-full h-96 max-h-[550px] min-h-[500px] object-contain group-hover:scale-110 hoverEffect rounded-md"
          />
        </motion.div>
      </AnimatePresence>
      <div className="grid grid-cols-6 gap-2 h-20 md:h-28">
        {image?.map((image) => (
          <button
            onClick={() => setActive(image)}
            key={image?._key}
            className={`border rounded-md overflow-hidden ${active?._key === image?._key ? "ring-1 ring-darkColor" : ""}`}
          >
            <Image
              src={urlFor(image).url()}
              alt="productImage"
              width={100}
              height={100}
              className="w-full h-auto object-contain"
            />
          </button>
        ))}
      </div>
    </div>
  );
};

export default ImageView;*/}