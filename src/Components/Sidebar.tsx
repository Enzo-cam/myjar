import { Box, Drawer, List, ListItem, Divider, ListItemIcon, ListItemText, Typography } from "@mui/material"
import InboxOutlinedIcon from '@mui/icons-material/InboxOutlined'
import MailOutlinedIcon from '@mui/icons-material/MailOutlineOutlined'

const menuItems : string[] = ['Inbox', 'Starred', 'Send email', 'Drafts']

const Sidebar = () => {
    return (
        <Drawer
            anchor="left"
            open={false}
        >   
            <Box sx={{width: 250}}>
                <Box sx={{padding: '5px 10px'}}>
                    <Typography variant="h4">
                        Menu
                    </Typography>
                </Box>

                <List>
                    {menuItems.map((text, index) => (
                        <ListItem button key={index}>
                            <ListItemIcon>
                                {index % 2 ? <InboxOutlinedIcon /> : <MailOutlinedIcon/> }
                            </ListItemIcon>
                            <ListItemText primary={text}/>
                        </ListItem>
                    ))}
                </List>
                
                <Divider />

                <List>
                    {menuItems.map((text, index) => (
                        <ListItem button key={index}>
                            <ListItemIcon>
                                {index % 2 ? <InboxOutlinedIcon /> : <MailOutlinedIcon/> }
                            </ListItemIcon>
                            <ListItemText primary={text}/>
                        </ListItem>
                    ))}
                </List>
            </Box>
        </Drawer>
    )
}

export default Sidebar