import React from 'react'
import TextFade from '../components/TextFade/TextFade'
import styles from './page.module.css'

export default function Home() {
  return (
    <div className={styles.home}>
      <h1>Taryn Martin</h1>
      <TextFade staticText='Brings' />
    </div>
  )
}
