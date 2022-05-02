import React from "react";
import { Card, makeStyles } from "@material-ui/core";
import FeaturedProjectObject from "../../FeaturedProjectObject";

const useStyles = makeStyles({
    container: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center"
    },

    card: {
      position: 'relative',
      backgroundColor: 'transparent'
    },

    CardContent: {
      position: 'absolute',
      color: "#000000",
    },
    CardContentTextSecondary: {
      color: "#000000", 
    },

    image: {
      backgroundColor: '#000000',
      height: '30em'
    },

    media: {
      width: '100%',
      height: '100%',
      opacity: 0.35
    },

    overlay: {
      position: 'absolute',
      left: 0,
      right: 0,
      top: 0,
      bottom: 0,
      display: 'flex',
      color: 'white',
      margin: 0,
      alignItems: 'center',
      justifyContent: 'center'
    }
  });

const FeaturedProjectFullScreen = () => {
    const classes = useStyles();
    return (
        <Card className={classes.card}>
            <div className={classes.image}>
                <img src={require('../../../../../images/website.png').default} className={classes.media} />
            </div>
            <div className={classes.overlay}>
                <FeaturedProjectObject isSmallScreen={true} />
            </div>
        </Card>
    )
}

export default FeaturedProjectFullScreen;