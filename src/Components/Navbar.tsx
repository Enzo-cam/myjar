import { useContext } from "react"
import { AppBar, IconButton, Toolbar, Typography } from "@mui/material"
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined'
import JarContext from "@/Context/UI/UIContext"


const Navbar = () => {
  const {openSideMenu} = useContext(JarContext)

  return (
    <AppBar position="sticky" >
        <Toolbar>
            <IconButton
                size="large"
                edge="start"
                onClick={openSideMenu}
            >
                <MenuOutlinedIcon/>
            </IconButton>

            <Typography variant="h6">MyJar</Typography>
        </Toolbar>
    </AppBar>
  )
}

export default Navbar