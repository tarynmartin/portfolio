import type { Metadata } from 'next'

export const metadata: Metadata = { title: 'About Blah', description: 'About page' }

const AboutLayout = ({ children }: {
  children: React.ReactNode
}) => {
  return (
      <div>{children}</div>
  )
}

export default AboutLayout;