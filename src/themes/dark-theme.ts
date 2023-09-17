import {createTheme} from '@mui/material'

export const darkTheme = createTheme({
    palette: {
      mode: 'dark'
    },

    components:{
      MuiAppBar: {
        defaultProps: {},
        styleOverrides: {
          root: {
            elevation: 0
          }
        }
      }
    }
  })
  