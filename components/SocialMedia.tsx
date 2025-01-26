import React from 'react'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from './ui/tooltip';
import Link from 'next/link';
import { Facebook, Github, Instagram, Linkedin } from 'lucide-react';
import { cn } from '@/lib/utils';


interface Props{
    className?: string;
    iconClassName?: string;
    tooltipClassName?: string;
}

const socialLink = [
    {
        title: "Facebook",
        href: "https://www.facebook.com/ashhad11/",
        icon: <Facebook className="w-5 h-5" />,
    },
    {
        title: "Github",
        href: "https://github.com/Rukhsanaashhad",
        icon: <Github className="w-5 h-5" />,
    },
    {
        title: "Linkedin",
        href: "https://www.linkedin.com/in/ashhad-khan-89484b2b5/",
        icon: <Linkedin className="w-5 h-5" />,
    },
    {
        title: "Instagram",
        href: "https://www.instagram.com/ashhad12a/",
        icon: <Instagram className="w-5 h-5" />,
    },
]


const SocialMedia = ({className, iconClassName,tooltipClassName}:Props) => {
  return <TooltipProvider>
    <div className={cn("flex items-center gap-3.5", className)}>
       {socialLink?.map((item)=>(
         <Tooltip key={item?.title}>
         <TooltipTrigger asChild>
             <Link href={item?.href}
             target="_blank"
             rel="noopener noreferrer"
              className={cn("p-2 border rounded-full hover:text-white hover:border-white hoverEffect"
                ,iconClassName)}
                >
             {item?.icon}
             </Link>
         </TooltipTrigger>
         <TooltipContent className={cn("bg-white text-darkColor font-semibold",tooltipClassName 
         )}
         >
            {item?.title}
         </TooltipContent>
     </Tooltip> 
       ))}
    </div>
  </TooltipProvider>
}

export default SocialMedia
