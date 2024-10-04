import { ThemeProvider } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

function Footer({theme}) {

    return (
        <ThemeProvider theme={theme}>
           <Box component="div" noValidate autoComplete="off"       sx={{
                height: 400,
                background: "linear-gradient(to right, #5371FF, #031A82);"
            }}
            >
                <Container>
                
                Add links here

                </Container>

            </Box>
            </ThemeProvider>
    )

}

export default Footer;