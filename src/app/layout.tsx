'use client'

import React from 'react'
import { Inter, Agbalumo } from 'next/font/google'
import DataObjectIcon from '@mui/icons-material/DataObject';
import styles from './page.module.css';
import './globals.css'
import NavBar from '../components/NavBar/page';

const agbalumo = Agbalumo({ subsets:[], weight: ['400']});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={agbalumo.className}>
      <main className={styles.main}>
        <div className={styles.header}>
          <div className={styles.logoContainer}>
            <DataObjectIcon sx={{ fontSize: 90, color: '#088c8c' }}/>
            <div>
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
