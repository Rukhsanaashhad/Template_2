import Container from '@/components/Container'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import React from 'react'

const ContactPage = () => {
  return (
    <Container className="max-w-3xl px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-5xl font-bold mb-6">Contact Us</h1>
        <p className="mb-6">
        I’m here to assist you! If you have any questions or need support, please don’t hesitate to reach out to me, 
        fill out the form for getting touch with me.
         I’ll do my best to respond promptly. 
        </p>
        <form action="space-y-4">
          <div className='space-y-0.5'>
            <Label htmlFor="name">Name</Label>
             <Input
              type='text' 
              name='name' 
              className='w-full px-3 py-2 border border-gray-300 rounded-md' 
              required />
          </div>
          <div className='space-y-0.5'>
            <Label htmlFor="email">E-mail</Label>
             <Input type='e-mail'
             id='e-mail'
              name='e-mail'
               className='w-full px-3 py-2 border border-gray-300 rounded-md'
                required />
          </div>
          <div className='space-y-0.5'>
            <Label htmlFor="message">Message</Label>
             <Textarea
             id='message'
              name='message'
              rows={6}
               className='w-full px-3 py-2 border border-gray-300 rounded-md'
                required />
          </div>
          <button
           type="submit"
            className='bg-darkColor/80 text-white px-6 py-3
             rounded-md text-sm font-semibold mt-4
              hover:bg-darkColor hoverEffect'>Send Message</button>
        </form>
    </Container>

  )
}

export default ContactPage
