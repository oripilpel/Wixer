import { styled } from '@mui/material/styles';
import TextField from '@mui/material/TextField';


export const StyledTextFieldDark = styled(TextField)({
    '& label.Mui-focused': {
      color: '#4d4d4d',
    },
    '& .MuiInput-underline': {
      color: '#4d4d4d'
    },
    '& .MuiInput-underline:before': {
      borderBottomColor: '#4d4d4d',
    },
    '& label': {
      color: '#4d4d4d',
    }
  })

