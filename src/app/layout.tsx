import React from 'react'
import dayjs from 'dayjs' 
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Metadata } from 'next'
import Image from 'next/image';
import { Fraunces } from 'next/font/google'
import NavBar from '../components/NavBar/NavBar';
import Link from 'next/link';
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
  openGraph: {
    title: 'Taryn Martin Web Development',
    type: 'website',
    locale: 'en_US',
    description: 'Web Development Services in Northern Colorado and beyond. Specializing in custom web sites and web applications.',
    url: 'https://taryn-martin.dev',
    images: [
      {
        url: 'https://taryn-martin.dev/opengraph-image.png',
        width: 200,
        height: 200,
        alt: 'Taryn Martin Web Development Logo',
      },
    ],
  },
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
            <Link href="/">
              <Image src={tmLogo} alt="Taryn Martin Web Development Logo" width={200} height={100}/>
            </Link>
            <NavBar />
          </div>
          <div className={styles.spacer} aria-hidden></div>
          <div className={styles.mainContent}>
            <div className={styles.headshotContainer}>
              <div className={styles.headshot} />
            </div>
            <div className={styles.content}>
              {children}
            </div>
          </div>
          <div>
            <footer className={styles.footer}>
              <p>&copy; {dayjs().year()} Taryn Martin Web Development LLC</p>
            </footer>
          </div>
        </main>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}
