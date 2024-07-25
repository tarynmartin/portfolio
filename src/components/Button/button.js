import React from "react";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Button from '@mui/material/Button';

const theme = createTheme({
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          color: 'white',
          backgroundColor: '#005757',
          "&:hover": {
            backgroundColor: '#045D5D',
          },
          "&.Mui-disabled": {
            backgroundColor: '#0000001f',
            color: '#00000042',
          }
        },
      },
    },
  },
})

const ThemedButton = ({ text, isDisabled, startIcon, endIcon, onClick }) => {
  return (
    <ThemeProvider theme={theme}>
      <Button variant="contained" disabled={isDisabled} startIcon={startIcon} endIcon={endIcon} onClick={onClick} type="submit">
        {text}
      </Button>
    </ThemeProvider>
  );
}

export default ThemedButton;