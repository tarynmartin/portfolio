import type { Metadata } from 'next'
import React from 'react';

export const metadata: Metadata = { title: 'Contact Me', description: 'Contact page' }

const ContactLayout = ({ children }: {
  children: React.ReactNode
}) => {
  return (
      <div>{children}</div>
  )
}

export default ContactLayout;