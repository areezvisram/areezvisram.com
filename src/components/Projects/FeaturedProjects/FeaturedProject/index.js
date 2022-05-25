import { Box } from "@material-ui/core";
import React from "react";
import FeaturedProjectFullScreen from "./FeaturedProjectFullScreen";
import FeaturedProjectSmallScreen from "./FeaturedProjectSmallScreen";

const FeaturedProject = ({ fullScreen, orientation, projectObject }) => {      
    return (
      <Box paddingBottom={5}>
        {
          fullScreen ? <FeaturedProjectSmallScreen orientation={orientation} projectObject={projectObject} /> : <FeaturedProjectFullScreen orientation={orientation} projectObject={projectObject} />
        }
      </Box>        
    )
}

export default FeaturedProject;