import styles from './page.module.css'

export const metadata = { title: 'About Blah', description: 'About page' }

const About = () => {
  return (
    <div className={styles.aboutSection}>
      <h1>About</h1>
    </div>
  )
}

export default About;