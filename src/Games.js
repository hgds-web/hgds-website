import {ThemeProvider, Typography} from "@mui/material";
import Grid from "@mui/material/Grid";
function Games({theme}) {


    return (
        <ThemeProvider theme={theme}>
        <Typography variant="h3" gutterBottom sx={{fontWeight: 800}} color="header.secondary" align="center">
            Events
        </Typography>
        <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
            {/* Add events here*/}
            </Grid>

    </ThemeProvider>
    )
}

export default Games;