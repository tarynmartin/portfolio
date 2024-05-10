import { createTheme } from '@mui/material/styles';
import { outlinedInputClasses } from '@mui/material/OutlinedInput';

export const contactTheme = (outerTheme) => createTheme({
  palette: {
    mode: outerTheme.palette.mode,
  },
  components: {
    MuiTextField: {
      styleOverrides: {
        root: {
          '& label.Mui-focused': {
            color: '#045D5D',
          },
          '& label.Mui-error': {
            color: '#d32f2f',
          },
        }
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          [`&.Mui-focused .${outlinedInputClasses.notchedOutline}`]: {
            borderColor: '#045D5D',
          },
          [`&.Mui-error .${outlinedInputClasses.notchedOutline}`]: {
            border: "1px solid",
            borderColor: '#d32f2f'
          },
        },
      },
    },
  }
});

export const navBarLinks = [
  { href: '/', text: 'Home' },
  { href: '/about', text: 'About' },
  { href: '/services', text: 'Services' },
  { href: '/contact', text: 'Contact' }
];

export const servicesList = [
  {
    title: 'Website Development',
    description: 'Create a website that is tailored to your needs and goals. From a simple landing page to a full e-commerce site, I\'m happy to work with clients to figure out what is the best solution to meet their needs.'
  }, { 
    title: 'App Development',
    description: 'With extensive experience with developing apps, I am happy to work with clients to create apps from scratch or help to push their existing app to the next level.'
  }, { 
    title: 'Deploying and Hosting',
    description: 'Not sure how to bring your website or app to life? I can help you deploy and host your website or app to make sure it is live and running smoothly.' 
  }, {
   title: 'Website Maintenance',
   description: 'Update and maintain websites for clients to keep them up to date and running smoothly. This includes updating content, fixing bugs, and making sure the website is secure. This can be a one off service or a monthly service.'
  }, {
    title: 'Consultations',
    description: 'Confused? Not sure what you need? I am happy to consult with clients to help them figure out what they need and how to get there.'
  }
]