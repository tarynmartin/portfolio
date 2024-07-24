import styles from './page.module.css'
import { Raleway } from 'next/font/google';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
// components
import Pill from '../../components/Pill/Pill';
// data
import { aboutInfoCopy, aboutInfoData, programmingInfo } from './data';

const raleway = Raleway({ subsets: ['latin-ext'] });

const About = () => {
  return (
    <div>
      <h1 className={styles.aboutHeader}>About Me</h1>
      <div className={raleway.className}>
        <section className={styles.aboutSection}>
          <p className={styles.column1}>{aboutInfoCopy}</p>
          <div className={styles.aboutInfo}>
            {
              Object.keys(aboutInfoData).map((info) => {
                return (
                  <div className={styles.aboutInfoSection} key={info}>
                    <strong>{`${info}:`}</strong><p>{aboutInfoData[info]}</p>
                  </div>
                )
              })
            }
          </div>
        </section>
      </div>
      <div className={styles.headerContainer}>
        <h2 className={styles.header}>Programming Skills</h2>
        <a href="https://github.com/tarynmartin" target="__blank"><GitHubIcon fontSize="large"/></a>
      </div>
      <div className={raleway.className}>
        <div className={styles.programmingSection}>
          {programmingInfo.map((info) => {
            return (
                <Pill text={info.text} image={info.image} key={info.text} />
            )
          })}
        </div>
      </div>
      <div className={styles.headerContainer}>
        <h2 className={styles.header}>Experience & Education</h2>
        <a href="https://www.linkedin.com/in/tarynmartin919/" target="__blank"><LinkedInIcon color="primary" fontSize="large" className={styles.LinkedInIcon} /></a>
      </div>
    </div>
  )
}

export default About;