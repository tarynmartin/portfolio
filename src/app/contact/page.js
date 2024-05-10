import React from 'react';
import ContactForm from '../../components/ContactForm/ContactForm';

// styles
import styles from './page.module.css';

const Contact = () => {

  return (
    <div className={styles.contactContainer} >
      <h1>Contact Me</h1>
      <ContactForm />
    </div>
  )

};

export default Contact;