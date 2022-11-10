import { ShoppingCart } from "@mui/icons-material";
import { AppBar, Badge, Box, IconButton, List, ListItem, Switch, Toolbar, Typography} from "@mui/material";
import {Link, NavLink} from "react-router-dom";
import { useStoreContext } from "../context/StoreContext";

interface Props {
    darkMode: boolean;
    handleThemeChange: () => void;
}

const midLinks = [
    {
        title: 'catalog', path: '/catalog'
    },
    {
        title: 'about', path: '/about'
    }
]

const rightLinks = [
    {
        title: 'login', path: '/login'
    },
    {
        title: 'register', path: '/register'
    }
]

const navSTyles = {
    color: 'inherit', 
    ypography: 'h6', 
    '&:hover':{color: 'grey.500'}, 
    '&.active':{color: 'text.secondary'}}

export default function Header({darkMode, handleThemeChange} : Props)
{
    
    const {basket} = useStoreContext();
    const getItemCount = () => {
        return basket?.items.reduce((sum, item) => sum + item.quantity, 0);
    }
    const itemCount = getItemCount();

    return (
        <AppBar position='static' sx={{mb:4}} color='default'>
             <Toolbar sx={{display: 'flex', justifyContent:'space-between', alignItems: 'center'}}>

                <Box display='flex' alignItems='center'>
                    <Typography variant="h6">
                        Practice Part1
                    </Typography>
                    <Switch checked={darkMode} onChange={handleThemeChange}/>
                </Box>
                

                 <List sx={{display: 'flex'}}>
                     {midLinks.map(({title, path}) => (
                        <ListItem component={NavLink} to={path} key={path} sx={navSTyles}>
                        {title.toUpperCase()}
                    </ListItem>
                     ))}
                 </List>
                
                <Box display='flex' alignItems='center'>
                    <IconButton component={Link} to='/basket' size='large' sx={{color:'inherit'}}>
                        <Badge badgeContent={itemCount} color='secondary'>
                            <ShoppingCart/>
                        </Badge>
                    </IconButton>

                    <List sx={{display: 'flex'}}>
                        {rightLinks.map(({title, path}) => (
                            <ListItem component={NavLink} to={path} key={path} sx={navSTyles}>
                            {title.toUpperCase()}
                        </ListItem>
                            
                        ))}
                    </List>
                </Box>
                 
             </Toolbar>
        </AppBar>
    )
}