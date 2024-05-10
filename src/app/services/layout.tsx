import type { Metadata } from 'next'
import React from 'react';

export const metadata: Metadata = { title: 'Services', description: 'Services page' }

const ServicesLayout = ({ children }: {
  children: React.ReactNode
}) => {
  return (
      <div>{children}</div>
  )
}

export default ServicesLayout;