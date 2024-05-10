'use client'

import { useState } from 'react';
import styles from './page.module.css'
import { Raleway } from 'next/font/google';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
// components
import Pill from '../../components/Pill/Pill';
import Accordion from '../../components/Accordion/Accordion';
// data
import { aboutInfoCopy, aboutInfoData, programmingInfo, experienceInfo, educationInfo } from './data';

const raleway = Raleway({ subsets: ['latin-ext'] });

const About = () => {
  const [expanded, setExpanded] = useState('');

  return (
    <div className={styles.aboutContainer}>
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
        <h1 className={styles.header}>Programming Skills</h1>
        <a href="https://github.com/tarynmartin" target="__blank"><GitHubIcon fontSize="large"/></a>
      </div>
      <div className={raleway.className}>
        <Grid container spacing={2}>
          {programmingInfo.map((info) => {
            return (
              <Grid item xs={6} sm={4} key={info.text}>
                <Pill text={info.text} image={info.image} />
              </Grid>
            )
          })}
        </Grid>
      </div>
      <div className={styles.headerContainer}>
        <h1 className={styles.header}>Experience</h1>
        <a href="https://www.linkedin.com/in/tarynmartin919/" target="__blank"><LinkedInIcon color="primary" fontSize="large"/></a>
      </div>
      <div className={raleway.className}>
        {experienceInfo.map((info) => {
          return (
            <Accordion expanded={expanded} setExpanded={setExpanded} info={info} key={info.panel}/>
          )
        })}
      </div>
      <h1 className={styles.header}>Education</h1>
      <div className={raleway.className}>
        <section className={styles.educationSection}>
          {educationInfo.map((info) => {
            return (
              <Paper elevation={6} key={info.key}>
                <div className={styles.educationCard}>
                  <h2>{info.school}</h2>
                  <div className={styles.schoolDetails}>
                    <h3>{info.focus}</h3>
                    <h4>{info.timePeriod}</h4>
                  </div>
                </div>
              </Paper>
            )
          })}
        </section>
      </div>
    </div>
  )
}

export default About;