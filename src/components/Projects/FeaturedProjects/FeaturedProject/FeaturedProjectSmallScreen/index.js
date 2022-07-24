import React from "react";
import { Card, makeStyles, CardMedia, Box, CardContent } from "@material-ui/core";
import FeaturedProjectObject from "../../FeaturedProjectObject";
import PropTypes from 'prop-types';

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
    width: "100%",
    filter: "brightness(35%)"
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
          image={projectObject.image_url}
          title="Contemplative Reptile"
        />
        <CardContent className={classes.fiCardContent}>
          <FeaturedProjectObject isSmallScreen={true} orientation={orientation} projectObject={projectObject} />
        </CardContent>
      </Card>
    </Box>
  )
};

FeaturedProjectSmallScreen.propTypes = {
  orientation: PropTypes.string,
  projectObject: PropTypes.object
};


export default FeaturedProjectSmallScreen;