// 試著將mui-sx所寫的樣式調整到這，並「限定」在styled裡面撰寫樣式
// https://www.figma.com/file/UOpGWiVHoAahQzoF9O8kVm/General-Cloud?node-id=483%3A27266

import { styled } from '@mui/material'
import Box from '@mui/material/Box'
import Paper from '@mui/material/Paper'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import TextField from '@mui/material/TextField'
import InputLabel from '@mui/material/InputLabel'

const StyledWrapper = styled('div')(({ theme }) => ({
  // !!!
  // Put your style only here.
  // !!!
}))

const MuiStyledPage = () => {
  return (
    <StyledWrapper>
      <Paper className="paper">
        <Paper className="title-wrapper">
          <Typography className="title">New account</Typography>
        </Paper>

        <Box className="form" component="form">
          {/* Input fields */}
          <Field id="user-name" text="Name" placeholder="Please enter" />
        </Box>

        <Box className="actions">
          <Button variant="outlined" color="inherit">
            Cancel
          </Button>
          <Button variant="contained">Save</Button>
        </Box>
      </Paper>
    </StyledWrapper>
  )
}

const Field = ({ id, text, placeholder }) => {
  return (
    <Box className="field">
      <InputLabel htmlFor={id}>
        {text}&nbsp;
        <span className="required">*</span>
      </InputLabel>
      <TextField
        id={id}
        size="small"
        variant="outlined"
        placeholder={placeholder}
      />
    </Box>
  )
}

export default MuiStyledPage
// **樣式完成後試著將此檔案副檔名改成.tsx並修改型別錯誤。
