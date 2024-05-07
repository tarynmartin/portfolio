'use client'

import React, { useEffect, useState } from 'react'
import styles from './TextFade.module.css'

const TextFade = ({ staticText, dynamicText }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    // on refresh, transition becomes out of sync
    console.log('currentIndex:', currentIndex);
    let timerID = setTimeout(() => changeCurrentIndex(), 4000);
    
    return () => {
      clearTimeout(timerID);
    }

  }, [currentIndex]);

  const changeCurrentIndex = () => {
    setCurrentIndex(currentIndex < dynamicText.length - 1 ? currentIndex + 1 : 0);
  }

  return (
    <div className={styles.textFadeContainer}>
        <p>{staticText}</p>
        <ul className={styles.textFadeList}>
          <li className={styles.textFadeItem}>{dynamicText[currentIndex]}</li>
        </ul>
      </div>
  )
}

export default TextFade;