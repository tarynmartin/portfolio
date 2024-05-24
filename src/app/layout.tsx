import React from 'react'
import { Analytics } from "@vercel/analytics/react"
import { Metadata } from 'next'
import Image from 'next/image';
import { Fraunces } from 'next/font/google'
import NavBar from '../components/NavBar/NavBar';
import tmLogo from '../../public/tmLogo.svg';
import styles from './page.module.css';
import './globals.css'

const fraunces = Fraunces({ subsets: ['latin'], display: 'swap' });

export const metadata: Metadata = { 
  title: { 
    template: '%s | Taryn Martin',
    default: 'Taryn Martin'
  }, 
  description: 'Home page',
  keywords: ['web development', 'software development', 'web site', 'create web site', 'Taryn Martin', 'Taryn Martin Web Development', 'Northern Colorado', 'Greeley', 'Fort Collins', 'Loveland'],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={fraunces.className}>
      <body>
        <main className={styles.main}>
          <div className={styles.header}>
            <Image src={tmLogo} alt="Taryn Martin Web Development Logo" width={200} height={100}/>
            <NavBar />
          </div>
          <div className={styles.mainContent}>
            <div className={styles.headshotContainer}>
              <div className={styles.headshot} />
            </div>
            <div className={styles.content}>
              {children}
            </div>
          </div>
        </main>
        <Analytics />
      </body>
    </html>
  )
}
