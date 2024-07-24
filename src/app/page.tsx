import React from 'react'
import LinkButton from '@/components/LinkButton/LinkButton'
import styles from './page.module.css'

export default function Home() {
  return (
    <div className={styles.home}>
      <div className={styles.homeInfo}>
        <div className={styles.subtitleContainer}>
          <h2 className={styles.homeSubtitle}>Do you</h2>
        </div>
        <div>
          <div className={styles.questionContainer}>
            <h2>...want a custom website without a subscription?</h2>
          </div>
          <div className={styles.questionContainer}>
            <h2>...want to free your time to focus on your business?</h2>
          </div>
          <div className={styles.questionContainer}>
            <h2>...want to work with someone local?</h2>
          </div>
          <div className={styles.questionContainer}>
            <h2>...need a skilled front-end contractor?</h2>
          </div>
        </div>
      </div>
      <div className={styles.homeBtnContainer}>
        <LinkButton href="/contact" text="Contact Me" />
      </div>
    </div>
  )
}
