import React from "react";
import { Typography, Box, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    white: {
        color: theme.palette.primary.contrastText,
    },

    blue: {
        color: theme.palette.secondary.main,
    },
}));

const AboutParagraph = () => {
    const classes = useStyles();
    return (
        <Box>
            <Typography className={classes.white} variant="h5" align="left">
                My name is {''}
                <Typography variant="h5" display="inline" className={classes.blue}>
                    Areez Visram {''}
                </Typography>     
                and I'm currently studying {''}            
                <Typography variant="h5" display="inline" className={classes.blue}>
                    Software Engineering {''}
                </Typography> 
                at {''}
                <Typography variant="h5" display="inline" className={classes.blue}>
                    McMaster University.
                </Typography> 
            </Typography>
            <Typography className={classes.white} variant="h5" align="left">
                Along with my major in Software Engineering, I am also pursuing a {''}
                <Typography variant="h5" display="inline" className={classes.blue}>
                    minor in Innovation
                </Typography> 
                .
            </Typography>
            <Typography className={classes.white} variant="h5" align="left">
                I have {''}
                <Typography variant="h5" display="inline" className={classes.blue}>
                    12 months {''}
                </Typography> 
                of software industry work experience. I spent {''}
                <Typography variant="h5" display="inline" className={classes.blue}>
                    4 months {''}
                </Typography> 
                as a {''} 
                <Typography variant="h5" display="inline" className={classes.blue}>
                    Developer Intern {''}
                </Typography>
                at {''}
                <Typography variant="h5" display="inline" className={classes.blue}>
                    SalonEverywhere
                </Typography>
                , as well as {''}
                <Typography variant="h5" display="inline" className={classes.blue}>
                    8 months {''}
                </Typography> 
                at {''}
                <Typography variant="h5" display="inline" className={classes.blue}>
                    Signiant {''}
                </Typography> 
                as a {''} 
                <Typography variant="h5" display="inline" className={classes.blue}>
                    Co-op Full Stack Developer{''}
                </Typography> 
                .
            </Typography>
            <Typography className={classes.white} variant="h5" align="left">
                I enjoy developing a wide variety of {''} 
                <Typography variant="h5" display="inline" className={classes.blue}>
                    software projects{''}
                </Typography> 
                . I have experience creating {''}
                <Typography variant="h5" display="inline" className={classes.blue}>
                    web applications{''}
                </Typography> 
                , {''} 
                <Typography variant="h5" display="inline" className={classes.blue}>
                    mobile applications{''}
                </Typography> 
                , {''} 
                <Typography variant="h5" display="inline" className={classes.blue}>
                    desktop applications{''}
                </Typography> 
                , {''} 
                <Typography variant="h5" display="inline" className={classes.blue}>
                    graphics programs{''}
                </Typography> 
                , {''}   
                <Typography variant="h5" display="inline" className={classes.blue}>
                    machine learning projects {''}
                </Typography>             
                and much more.
            </Typography>
            <Typography className={classes.white} variant="h5" align="left">
                I am a {''}
                <Typography variant="h5" display="inline" className={classes.blue}>
                    highly motivated{''}
                </Typography> 
                , {''}
                <Typography variant="h5" display="inline" className={classes.blue}>
                    hard-working{''}
                </Typography> 
                , {''}        
                <Typography variant="h5" display="inline" className={classes.blue}>
                    self-starter {''}
                </Typography>         
                who loves {''}
                <Typography variant="h5" display="inline" className={classes.blue}>
                    working on new projects {''}
                </Typography>
                and {''}
                <Typography variant="h5" display="inline" className={classes.blue}>
                    learning new technologies{''}
                </Typography>
                .                
            </Typography>
            <Typography className={classes.white} variant="h5" align="left">                
                Check out some of my proficient programming languages and skills:
            </Typography>
        </Box>
    )
}

export default AboutParagraph;