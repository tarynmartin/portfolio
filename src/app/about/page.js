import styles from './page.module.css'
import { Raleway } from 'next/font/google';
// icons
import { FaReact } from "react-icons/fa6";
import { FaVuejs } from "react-icons/fa6";
import { IoLogoJavascript } from "react-icons/io";
import { FaHtml5 } from "react-icons/fa6";
import { IoLogoCss3 } from "react-icons/io";
import { FaSass } from "react-icons/fa6";
import { FiFigma } from "react-icons/fi";
import { TbBrandCypress } from "react-icons/tb";
import { SiJest } from "react-icons/si";
import { BsBootstrap } from "react-icons/bs";
// components
import Pill from '../components/Pill/Pill';

const raleway = Raleway({ subsets: ['latin-ext'] });

const About = () => {

  const aboutInfoData = {
    name: 'Taryn Martin',
    location: 'Northern Colorado',
    training: 'Turing School of Software & Design',
    focus: 'Front End Development',
    email: 'taryn@duck.com'
  }

  const programmingInfo = [
    { text: 'React', image: <FaReact size={32} /> },
    { text: 'Vue', image: <FaVuejs size={32} /> },
    { text: 'Javascript', image: <IoLogoJavascript size={32} /> },
    { text: 'HTML', image: <FaHtml5 size={32} /> },
    { text: 'CSS', image: <IoLogoCss3 size={32} /> },
    { text: 'SASS', image: <FaSass size={32} />},
    { text: 'Figma', image: <FiFigma size={32} /> },
    { text: 'Cypress', image: <TbBrandCypress size={32} /> },
    { text: 'Jest', image: <SiJest size={32} />},
    { text: 'Bootstrap', image: <BsBootstrap size={32} /> },
  ]

  const AboutInfoSection = ({info}) => {
    return (
      <div className={styles.aboutInfoSection}>
        <strong>{`${info}:`}</strong><p>{aboutInfoData[info]}</p>
      </div>
    )
  }

  return (
    <div>
      <h1 className={styles.header}>About Me</h1>
      <div className={raleway.className}>
        <section className={styles.section}>
          <p className={styles.column1}>Hi! I'm Taryn. I am a front end software engineer who loves to grow and learn more about the front end. I specialize in React and Vue, and love to play with designs and creating the best user experience.  <br /> <br /> I have over 3 years of experience working on the front end, and many more years of working experience. I love to use my varied work and life experiences to create the best product possible. </p>
          <div className={styles.aboutInfo}>
            {
              Object.keys(aboutInfoData).map((info) => {
                return (
                  <AboutInfoSection info={info} />
                )
              })
            }
          </div>
        </section>
      </div>
      <h1 className={styles.header}>Programming</h1>
      <div className={raleway.className}>
        <section className={styles.programmingSection}>
          {programmingInfo.map((info) => {
            return (
              <Pill text={info.text} image={info.image} />
            )
          })
          }
        </section>
      </div>
      <h1 className={styles.header}>Experience</h1>
      <div className={raleway.className}>
        <section className={styles.section}>
          {/* list fairwinds, crunchy bananas, turing; make collapsible w/additional info?*/}
        </section>
      </div>
      <h1 className={styles.header}>Education</h1>
      <div className={raleway.className}>
        <section className={styles.section}>
          {/* Turing, UMAss, Juniata */}
        </section>
      </div>
      <h1 className={styles.header}>Hobbies/Interests</h1>
      <div className={raleway.className}>
        <section className={styles.section}>
          {/* traveling, baking, crochet, exercise, BJJ, spending time with friends, art */}
        </section>
      </div>
    </div>
  )
}

export default About;