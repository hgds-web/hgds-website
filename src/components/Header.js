import { ThemeProvider } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import { useNavigate } from 'react-router-dom';
import Toolbar from '@mui/material/Toolbar';
import Tooltip from '@mui/material/Tooltip';
import Logo from '../images/Logo.png'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
const links = {
    pages: ['Home', 'About Us', 'Games', 'Members', 'Contact Us'],
    links: ['/', '/aboutus', '/games', '/members', '/contactus']
}

function Header({theme}) {
    const nav = useNavigate();

    return (
        <ThemeProvider theme={theme}>
    <AppBar component="nav" position="relative" style={{background: 'white', boxShadow: 'none'}} sx={{ zIndex: theme.zIndex.drawer + 1 }}>
        <Toolbar>
        <Tooltip title="Home">
            <Button href="/" >
              <img src={Logo} alt="HGDS logo" width={"140px"}/>
              </Button>
            </Tooltip>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }} />
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
             { links.pages.map((item, index) => (
                  <Button key={item}
                          size={"large"}
                          onClick={()=> {nav(links.links[index])
                          }}sx={{ ml: 2, fontWeight: 800, textTransform: 'capitalize'}}>
                      {item}
                  </Button>
              ))
              }

          </Box>
        </Toolbar>
      </AppBar>
     </ThemeProvider>
    )

}

export default Header;