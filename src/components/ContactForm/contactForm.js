'use client'
import React, { useState, useMemo } from 'react';
import { useForm } from 'react-hook-form';
import { joiResolver } from '@hookform/resolvers/joi';
import Joi from 'joi';

// MUI imports
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import ThemedButton from '../Button/button';
import Snackbar from '@mui/material/Snackbar';
import SendIcon from '@mui/icons-material/Send';

// theme imports
import { ThemeProvider, useTheme } from '@mui/material/styles';
import { contactTheme } from '../../data';

const schema = Joi.object({
  email: Joi.string().email({ tlds: { allow: false }}).required(),
  subject: Joi.string().required(),
  message: Joi.string().required(),
  name: Joi.string().required()
});

const ContactForm = () => {
  const outerTheme = useTheme();
  const { reset, handleSubmit, formState, register } = useForm({
    resolver: joiResolver(schema),
    defaultValues: {
      email: '',
      subject: '',
      message: '',
      name: ''
    }
  });

  const [emailSuccess, setEmailSuccess] = useState(false);
  const [emailError, setEmailError] = useState(false);

  const isDisabled = useMemo(() => {
    return (!formState.dirtyFields.email || !formState.dirtyFields.subject || !formState.dirtyFields.message || !formState.dirtyFields.name);
  }, [formState])

  async function onSubmit(formData) {
    setEmailSuccess(false);
    setEmailError(false);

    try {
      const response = await fetch('/api/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },

        body: JSON.stringify({
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
          name: formData.name
        }),

      })

      if (response.ok) {
        reset();
        setEmailSuccess(true);
      } else {
        setEmailError(true);
      }
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <Box component="form" noValidate autoComplete="off" sx={{ display: 'flex', flexDirection: 'column', gap: '1rem' }} onSubmit={handleSubmit(onSubmit)}>
      <Snackbar open={emailSuccess} autoHideDuration={6000} message="Email sent successfully! We'll respond as soon as possible" anchorOrigin={{ horizontal: 'center', vertical: 'top' }} onClose={() => setEmailSuccess(false)}/>
      <Snackbar open={emailError} autoHideDuration={6000} message="There was an issue sending your email. Please try again" anchorOrigin={{ horizontal: 'center', vertical: 'top' }} onClose={() => setEmailError(false)}/>
      <ThemeProvider theme={contactTheme(outerTheme)}>
        <TextField {...register('email')} label="Email" variant="outlined" type="email" required error={!!formState?.errors?.email} helperText={!!formState?.errors?.email ? formState?.errors?.email?.message : null} />
        <TextField {...register('name')} label="Name" variant="outlined" required error={!!formState?.errors?.name} helperText={!!formState?.errors?.name ? formState?.errors?.name?.message : null}/>
        <TextField {...register('subject')} label="Subject" variant="outlined" required error={!!formState?.errors?.subject} helperText={!!formState?.errors?.subject ? formState?.errors?.subject?.message : null} />
        <TextField {...register('message')} label="Message" variant="outlined" multiline minRows={4} required error={!!formState?.errors?.message} helperText={!!formState?.errors?.message ? formState?.errors?.message?.message : null}/>
      </ThemeProvider>
      <Box sx={{ display: 'flex', justifyContent: 'center' }}>
        <ThemedButton text="Send" isDisabled={isDisabled} endIcon={<SendIcon />} />
      </Box>
    </Box>
  )
}

export default ContactForm;