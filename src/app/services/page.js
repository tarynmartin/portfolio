import React from 'react';
import Paper from '@mui/material/Paper';
import LinkButton from '../../components/LinkButton/LinkButton';
import { servicesList } from '../../data';

import styles from './page.module.css';

const Services = () => {
  return (
    <div className={styles.servicesContainer}>
      <h1>Services</h1>
      <section className={styles.servicesListContainer}>
        {servicesList.map((service, index) => {
          return (
            <Paper key={index} className={styles.servicesInfo}>
              <h2>{service.title}</h2>
              <p>{service.description}</p>
            </Paper>
          )
        })}
      </section>
      <div className={styles.contactContainer}>
        <h3>Interested?</h3>
        <LinkButton href="/contact" text="Get in Touch" />
      </div>
    </div>
  )
}

export default Services;