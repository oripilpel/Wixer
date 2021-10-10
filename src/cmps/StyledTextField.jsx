import { styled } from '@mui/material/styles';
import TextField from '@mui/material/TextField';


// export function StyledTextField() {
//   // const clr = (isDarkTheme) ? '#4d4d4d' : '#F7F6F2'
//   return 
// }
export const StyledTextField = styled(TextField)({
  '& label.Mui-focused': {
    color: '#F7F6F2',
  },
  '& .MuiInput-underline': {
    color: '#F7F6F2'
  },
  '& .MuiInput-underline:before': {
    borderBottomColor: '#F7F6F2',
  },
  '& label': {
    color: '#F7F6F2',
  }
})
