import React from 'react'
import styles from './TextFade.module.css'

const TextFade = ({ staticText }) => {
  return (
    <div className={styles.textFadeContainer}>
        <p>{staticText}</p>
        <p className={styles.textFadeItem}></p>
      </div>
  )
}

export default TextFade;