import styles from './page.module.css';

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

export const aboutInfoCopy = <span>Hi! I'm Taryn. I am a frontend software engineer who loves to grow and learn more about the front end. I specialize in React and Vue, and love to play with designs and creating the best user experience.  <br /> <br /> I have over 3 years of experience working on the front end, and many more years of working experience. I love to use my varied work and life experiences to create the best product possible.</span>

export const aboutInfoData = {
  name: 'Taryn Martin',
  location: 'Northern Colorado',
  training: 'Turing School of Software & Design',
  focus: 'Front End Development',
  email: 'taryn@duck.com'
}

// is there other info I can add?
export const programmingInfo = [
  { text: 'React', image: <FaReact size={32} /> },
  { text: 'Vue', image: <FaVuejs size={32} /> },
  { text: 'Javascript', image: <IoLogoJavascript size={32} /> },
  { text: 'HTML', image: <FaHtml5 size={32} /> },
  { text: 'CSS', image: <IoLogoCss3 size={32} /> },
  { text: 'SASS', image: <FaSass size={32} />},
  { text: 'Figma', image: <FiFigma size={32} /> },
  { text: 'Cypress', image: <TbBrandCypress size={32} /> },
  // { text: 'Jest', image: <SiJest size={32} />},
  { text: 'Bootstrap', image: <BsBootstrap size={32} /> },
]

export const experienceInfo = [
  {
    summary:
    <div>
      <div>
        <strong>Frontend Web Developer: </strong>
        <a href="https://www.fairwinds.com/" target='__blank'>Fairwinds</a>
      </div>
      <div>
        <span>June 2021 - November 2023</span>
      </div>
    </div>,
    details:
    <ul className={styles.detailsList}>
      <li>Tech stack utilized Vue, React, SCSS, and Cypress to name a few to create and deliver features</li>
      <li>Implemented features based on Product and Design requirements for the Fairwinds Insights Kubernetes governance platform, most notably:
          <ul className={styles.subList}>
            <li>K8s costs show-back and savings recommnedations UI</li>
            <li>HIPAA, SOC@, ISO27001 Automated Compliance feature</li>
            <li>Policy configuration dashboard</li>
          </ul>
      </li>
      <li>Increased team velocity and promoted consistency by creating reusable frontend components (i.e: panels, buttons, icons, etc)</li>
      <li>Supported engineering goal to update front end framework by converting pages from Vue to React</li>
      <li>Collaborated with Product and Design to refine features before implementation and delivery; communicated feedback, issues, or required changes to Product early and often</li>
      <li>Identified and triaged bugs, tech debt, and polishes to ensure a seamless user experience</li>
      <li>Created and updated frontend tests to enable QA testing of feature stack</li>
      <li>Presented in-progress and recently completed work at cross-functional sprint demo ceremony</li>
    </ul>,
    panel: 'panel1'
  },
  {
    summary:
    <div>
      <div>
        <strong>Freelance Software Engineer: </strong>
        <a href="https://www.crunchybananas.com/" target='__blank'>Crunchy Bananas</a>
      </div>
      <div>
        <span>April 2021 - July 2021</span>
      </div>
    </div>,
    details:
    <ul className={styles.detailsList}>
      <li>Utilized Vue and SCSS to create and deliver features</li>
      <li>Implemented features based on Product and Design requirements for our client's SaaS application</li>
      <li>dentified and triaged bugs, tech debt, and polishes to ensure a seamless user experience</li>
      <li>Provided feedback through code reviews and discussions with team</li>
    </ul>,
    panel: 'panel2'
  },
  {
    summary:
    <div>
      <div>
        <strong>Student Support Specialist: </strong>
        <a href="https://www.turing.edu/" target='__blank'>Turing School of Software & Design</a>
      </div>
      <div>
        <span>February 2021 - June 2021</span>
      </div>
    </div>,
    details:
    <ul className={styles.detailsList}>
      <li>Supported students 1 on 1 or in small groups in learning Javascript, React, HTML, CSS, SASS, and general problem solving skills</li>
      <li>Tracked student progress and communicated with instructional team as needed</li>
    </ul>,
    panel: 'panel3'
  },
  {
    summary: <strong>Miscellaneous Work</strong>,
    details:
    <div>
      <p className={styles.miscTitle}>Overview of Previous Careers:</p>
      <ul className={styles.detailsList}>
        <li><strong>Human Services:</strong>
          <ul className={styles.subList}>
            <li>Provided support to clients in a variety of settings</li>
            <li>Managed client caseloads</li>
            <li>Provided support to clients in crisis</li>
            <li>Coordinated coworkers and support staff to ensure clients were receiving all of their services</li>
          </ul>
        </li>
        <li><strong>Education:</strong></li>
          <ul className={styles.subList}>
            <li>Created and implemented lesson plans for students</li>
            <li>Managed student behavior</li>
            <li>Provided support to students in crisis</li>
          </ul>
        <li><strong>Customer Service/Sales:</strong>
          <ul className={styles.subList}>
            <li>Provided excellent customer service to clients</li>
            <li>Managed client accounts and provided support</li>
            <li>Managed sales and inventory</li>
          </ul>
        </li>
      </ul>
    </div>,
    panel: 'panel4'
  }
]

export const educationInfo = [
  {
    school: 'Turing School of Software & Design',
    focus: 'Front End Development',
    timePeriod: 'May 2020 - November 2020',
    key: 'turing'
  },
  {
    school: 'University of Massachusetts - Amherst',
    focus: 'M.Ed School Counseling',
    timePeriod: 'September 2009 - May 2012',
    key: 'umass',
  },
  {
    school: 'Juniata College',
    focus: 'BS Psychology',
    timePeriod: 'September 2005 - May 2009',
    key: 'juniata',
  },
]