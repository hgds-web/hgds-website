import { ThemeProvider } from '@mui/material/styles';
import { Grid, Typography } from '@mui/material';
import {useEffect, useState} from 'react';
import Box from "@mui/material/Box";
function AboutUs({theme}) {
    const [members, setMembers] = useState([
        {
            name: 'Andreas',
            position: '',
            image: '',
            profileURL: "",
            description: '',
        },
        {
            name: 'Johnny',
            position: '',
            image: '',
            profileURL: "",
            description: '',
        },
        {
            name: 'Shawn',
            position: '',
            image: '',
            profileURL: "",
            description: '',
        },
        {
            name: 'Brett',
            position: '',
            image: '',
            profileURL: "",
            description: '',
        },
       
    ]);
    const styles = {
        container: {
          padding: theme.spacing(8, 0),
        },
        summary: {
          maxWidth: 600,
          margin: 'auto',
          textAlign: 'center',
          marginBottom: theme.spacing(4),
        },
        member: {
          margin: theme.spacing(2),
        },
        name: {
          marginTop: theme.spacing(1),
          fontWeight: 'bold',
        },
        position: {
          color: theme.palette.text.secondary,
          marginTop: theme.spacing(0.5),
        },
        avatar: {
          width: 200,
          height: 200,
        },
      };


    return (
        <ThemeProvider theme={theme}>
        <section style={styles.container}>
          <div>
            {/* Big photo */}
            <img src="https://source.unsplash.com/random/800x400" alt="Team" />
          </div>
          <div style={{...styles.summary, marginTop: theme.spacing(4)}}>
            {/* Summary */}
            <Typography variant="body1" color="textSecondary">
            The Johns Hopkins University Game Development's mission is to develop an ecosystem for students interested in video game design and development. We aim to accomplish this goal by hosting educational workshops to teach concepts of game development not covered in existing JHU courses, providing a community for finding teams to work on games, and organizing professional development events for students interested in the gaming industry.
            </Typography>
          </div>
          <Typography variant="h3" gutterBottom sx={{fontWeight: 800}} color="header.secondary" align="center">
              Meet the Team
            </Typography>
          <Grid container justifyContent="center">
            {/* Members */}

           {members.map((member) => (
              <Grid item key={member.name} style={styles.member}>
                <img src={member.image} alt={member.name} style={styles.avatar} />
                  <Typography variant="subtitle1" style={styles.name} >
                  {member.name}
                </Typography>
                <Typography variant="body2" style={styles.position}>
                  {member.position}
                </Typography>
                  <Box sx={{ display: 'inline-flex', maxWidth: 200 }}>
                      <Typography variant="body2"  component="a"  target="_blank" align={"left"}>
                          {member.description}
                      </Typography>
                  </Box>
              </Grid>
            ))}
          </Grid>
        </section>
        </ThemeProvider>
    )

}

export default AboutUs;