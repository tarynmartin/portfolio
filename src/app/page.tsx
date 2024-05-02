import React from 'react'
import styles from './page.module.css'

export default function Home() {
  return (
    <div className={styles.home}>
      <h1>Taryn Martin</h1>
      <span>Brings </span>
      <ul className={styles.dynamic}>
        <li>dedication</li>
        <li>creativity</li>
        <li>experience</li>
        <li>blah</li>
      </ul>
    </div>
  )
}
