import React from 'react'
import TextFade from '../components/TextFade/TextFade'
import LinkButton from '@/components/LinkButton/LinkButton'
import styles from './page.module.css'

export default function Home() {
  return (
    <div className={styles.home}>
      <div className={styles.homeInfo}>
        <h1>Taryn Martin</h1>
        <TextFade staticText='Brings' />
      </div>
      <LinkButton href="/contact" text="Get in Touch" />
    </div>
  )
}
