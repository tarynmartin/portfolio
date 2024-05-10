'use client'

import React from 'react'
import { Fraunces } from 'next/font/google'
import DataObjectIcon from '@mui/icons-material/DataObject';
import styles from './page.module.css';
import './globals.css'
import NavBar from '../components/NavBar/NavBar';

const fraunces = Fraunces({ subsets: ['latin'], display: 'swap' });

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
          <div className={styles.logoContainer}>
            <DataObjectIcon sx={{ fontSize: 90, color: '#057a7a' }}/>
            <div className={styles.logoHeader}>
              <h1>Taryn Martin</h1>
              <h2>Web Development</h2>
            </div>
          </div>
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
      </body>
    </html>
  )
}
