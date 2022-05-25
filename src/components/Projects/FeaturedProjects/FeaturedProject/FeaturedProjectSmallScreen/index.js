import React from "react";
import { Card, makeStyles, CardMedia, Box, withStyles, CardContent, Typography, CardActionArea } from "@material-ui/core";
import FeaturedProjectObject from "../../FeaturedProjectObject";

const useStyles = makeStyles({
  card: {
    maxWidth: 600,
    position: "relative"
  },

  media: {
    position: "absolute",
    top: 0,
    right: 0,
    height: "100%",
    width: "100%"
  },

  fiCardContent: {
    color: "#ffffff",
    backgroundColor: "rgba(0,0,0,.24)",
    position: "relative"
  },

  fiCardContentTextSecondary: {
    color: "rgba(255,255,255,0.78)"
  }
});

const FeaturedProjectSmallScreen = ({ orientation, projectObject }) => {
    const classes = useStyles();
    return (    
        <Box my={2} mx={4}>
          <Card className={classes.card}>          
            <CardMedia
              className={classes.media}
              media="picture"
              alt="Contemplative Reptile"
              image="/website.png"
              title="Contemplative Reptile"
            />
            <CardContent className={classes.fiCardContent}>
              <FeaturedProjectObject isSmallScreen={true} orientation={orientation} projectObject={projectObject} />
            </CardContent>          
          </Card>
        </Box>       
    )
}

export default FeaturedProjectSmallScreen;