import React from 'react';
import ContactForm from '../../components/ContactForm/contactForm';
// import Box from '@mui/material/Box';
// import TextField from '@mui/material/TextField';
// import ThemedButton from '../../components/Button/button';
// import { ThemeProvider, useTheme } from '@mui/material/styles';
// import { contactTheme } from '../../data';
// import { Resend } from 'resend';
// import Email from '../../emails/contactEmail';

// // icons
// import SendIcon from '@mui/icons-material/Send';

// styles
import styles from './page.module.css';

const Contact = () => {
  // const outerTheme = useTheme();
  // const [email, setEmail] = useState('');
  // const [subject, setSubject] = useState('');
  // const [message, setMessage] = useState('');

  // const isDisabled = useMemo(() => {
  //     return (!email || !subject || !message);
  // }, [email, subject, message])

  // const apiKey = process.env.RESEND_API_KEY;
  // const resend = new Resend(apiKey);

  // const onSubmit  = async (e, formData) => {
  //   e.preventDefault();
  //   console.log('formData', formData)
  //   console.log('on submit', email, subject, message)
  //   try {
  //     // await resend.emails.send({
  //     //   from: 'you@example.com',
  //     //   to: 'taryn.martin919@gmail.com',
  //     //   subject: subject,
  //     //   react: <Email message={message} />,
  //     // });
      
  //     await fetch('/api/send', {
  //       method: 'POST',
  //       headers: {
  //         'Content-Type': 'application/json',
  //       },
  
  //       body: JSON.stringify({
  //         email,
  //         subject,
  //         message
  //       }),
  //     }).then((response) => console.log('response', response.json()))
  //     // .then(() => {
  //     //   // Toast notification
  //     //   toast.success('Your email message has been sent successfully');
  //     // });
  //     console.log('response', response);
  //   } catch (e) {
  //     console.error(e);
  //   }

  //   // reset();
  // };

  return (
    <div className={styles.contactContainer} >
      <h1>Contact Me</h1>
      <ContactForm />
      {/* <Box component="form" noValidate autoComplete="off" sx={{ display: 'flex', flexDirection: 'column', gap: '1rem' }} >
        <ThemeProvider theme={contactTheme(outerTheme)}>
          <TextField label="Email" value={email} onChange={(e) => setEmail(e.target.value)} variant="outlined" type="email" required />
          <TextField label="Subject" value={subject} onChange={(e) => setSubject(e.target.value)} variant="outlined" required />
          <TextField label="Message" value={message} onChange={(e) => setMessage(e.target.value)} variant="outlined" multiline minRows={4} required />
        </ThemeProvider>
        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
          <ThemedButton text="Send" isDisabled={isDisabled} endIcon={<SendIcon />} onClick={onSubmit}/>
        </Box>
      </Box> */}
    </div>
  )

};

export default Contact;