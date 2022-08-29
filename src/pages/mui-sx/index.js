// 試著切出連結左下 New account 頁面
// 你可以額外在任何component加上sx去寫樣式
// https://www.figma.com/file/UOpGWiVHoAahQzoF9O8kVm/General-Cloud?node-id=483%3A27266

import Box from '@mui/material/Box'
import Paper from '@mui/material/Paper'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
// import TextField from '@mui/material/TextField'
// import InputLabel from '@mui/material/InputLabel'

const MuiSXPage = () => {
  return (
    <Box sx={{}}>
      <Paper className="paper" sx={{}}>
        <Paper className="title-wrapper">
          <Typography className="title">New account</Typography>
        </Paper>

        <Box className="form" component="form" sx={{}}>
          {/* Input fields */}
        </Box>

        <Box className="actions" sx={{}}>
          <Button variant="outlined" color="inherit" sx={{}}>
            Cancel
          </Button>
          <Button variant="contained">Save</Button>
        </Box>
      </Paper>
    </Box>
  )
}

export default MuiSXPage
