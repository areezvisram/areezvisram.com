import { Box } from "@material-ui/core";
import React from "react";
import FeaturedProjectFullScreen from "./FeaturedProjectFullScreen";
import FeaturedProjectSmallScreen from "./FeaturedProjectSmallScreen";

const FeaturedProject = ({ fullScreen }) => {    
    return (
      <Box>
        {
          fullScreen ? <FeaturedProjectFullScreen /> : <FeaturedProjectSmallScreen />
        }
      </Box>        
    )
}

export default FeaturedProject;