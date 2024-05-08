'use client'

import React, { useState, useMemo } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import ThemedButton from '../../components/Button/button';
import { ThemeProvider, useTheme } from '@mui/material/styles';
import { contactTheme } from '../../data';

// icons
import SendIcon from '@mui/icons-material/Send';

// styles
import styles from './page.module.css';

const Contact = () => {
  const outerTheme = useTheme();
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

const isDisabled = useMemo(() => {
    return (!email || !subject || !message);
}, [email, subject, message])

  return (
    <div className={styles.contactContainer} >
      <h1>Contact Me</h1>
      <Box component="form" noValidate autoComplete="off" sx={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        <ThemeProvider theme={contactTheme(outerTheme)}>
        <TextField label="Email" value={email} onChange={(e) => setEmail(e.target.value)} variant="outlined" type="email" required />
        <TextField label="Subject" value={subject} onChange={(e) => setSubject(e.target.value)} variant="outlined" required />
        <TextField label="Message" value={message} onChange={(e) => setMessage(e.target.value)} variant="outlined" multiline minRows={4} required />
        </ThemeProvider>
        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
          <ThemedButton text="Send" isDisabled={isDisabled} endIcon={<SendIcon />} />
        </Box>
      </Box>
    </div>
  )

};

export default Contact;