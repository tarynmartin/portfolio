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