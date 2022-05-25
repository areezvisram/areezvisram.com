import React from 'react';
import { Box, useMediaQuery, useTheme } from '@material-ui/core';
import FeaturedProject from '../../components/Projects/FeaturedProjects/FeaturedProject';

const FeaturedProjectsContainer = () => {   
    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down(956));  

    const testFeaturedProjectData = [
        {
          "name": "test",
          "description": "This is a test description",
          "languages": [
              "JavaScript",
              "React"
          ],
          "github": "https://www.github.com",
          "external": "https://www.reezanvisram.com"
        },
        {
          "name": "test 2",
          "description": "This is a test 2 description",
          "languages": [
              "JavaScript",
              "React",
              "Java",
              "Make",
              "Test",
              "Test",
              "Test",
              "Test",
              "Test",
              "Test",
          ],
          "github": "https://www.github.com",
          "external": "https://www.areezvisram.com"
        },
      ]

    return (                 
        <Box display='flex' flexDirection="column" overflow="hidden">
          {/* <FeaturedProject fullScreen={fullScreen} orientation="right" />  
          <FeaturedProject fullScreen={fullScreen} orientation="left" />           */}
          {
            testFeaturedProjectData.map((projectObject) => {
              return (
                <FeaturedProject fullScreen={fullScreen} projectObject={projectObject} orientation="right" />
              )
            })
          }
        </Box>        
    );
};

export default FeaturedProjectsContainer;