import { styled } from '@mui/material/styles';
import TextField from '@mui/material/TextField';

export const CssTextFieldLight = styled(TextField)({
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