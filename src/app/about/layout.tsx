import type { Metadata } from 'next'
import React from 'react';

export const metadata: Metadata = { title: 'About', description: 'About page' }

const AboutLayout = ({ children }: {
  children: React.ReactNode
}) => {
  return (
      <div>{children}</div>
  )
}

export default AboutLayout;