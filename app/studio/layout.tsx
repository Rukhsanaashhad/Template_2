
import { Metadata } from 'next';
import React from 'react'

export const metadata: Metadata = {
    title: "Max",
    description: "Explore the Best Furniture's",
  };


const RootLayout = ({children}:{children:React.ReactNode}) => {
  return <html lang="en">
      <body>{children}</body>
    </html>
  
}

export default RootLayout;
