import { styled } from '@mui/material/styles';
import TextField from '@mui/material/TextField';


export function StyledTextField(isDarkTheme) {
  const clr = (isDarkTheme) ? '#4d4d4d' : '#F7F6F2'
  return styled(TextField)({
    '& label.Mui-focused': {
      color: clr,
    },
    '& .MuiInput-underline': {
      color: clr
    },
    '& .MuiInput-underline:before': {
      borderBottomColor: clr,
    },
    '& label': {
      color: clr,
    }
  })

}