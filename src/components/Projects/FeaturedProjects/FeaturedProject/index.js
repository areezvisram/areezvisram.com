import { Box } from "@material-ui/core";
import React from "react";
import FeaturedProjectFullScreen from "./FeaturedProjectFullScreen";
import FeaturedProjectSmallScreen from "./FeaturedProjectSmallScreen";

const FeaturedProject = ({ fullScreen, orientation }) => {      
    return (
      <Box paddingBottom={5}>
        {
          fullScreen ? <FeaturedProjectSmallScreen orientation={orientation} /> : <FeaturedProjectFullScreen orientation={orientation} />
        }
      </Box>        
    )
}

export default FeaturedProject;