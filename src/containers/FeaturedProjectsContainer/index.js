import React, { useEffect, useState } from 'react';
import { Box, useMediaQuery, useTheme } from '@material-ui/core';
import FeaturedProject from '../../components/Projects/FeaturedProjects/FeaturedProject';
import { useSelector } from 'react-redux';
import { serverURL } from '../../constants/server';

const FeaturedProjectsContainer = () => {
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down(956));

  const [featuredProjects, setFeaturedProjects] = useState([]);
  const [error, setError] = useState(null);

  const state = useSelector((state) => state.tokenReducer);
  const token = state.items;

  useEffect(() => {
    if (!state.loading) {
      fetch(`${serverURL}/projects/getProjects`, {
        method: 'GET',
        headers: {
          'Access-Token': token,
          'Partition': 'featured'
        }
      })
        .then((response) => {
          if (response.ok) {
            return response.json();
          }
          throw response;
        })
        .then((data) => {
          console.log(data.projects);
          setFeaturedProjects(data.projects);
        })
        .catch((error) => {
          setError(error);
        })
    }
  }, [state.loading])

  return (
    <Box display='flex' flexDirection="column" overflow="hidden">
      {
        error ? null :
          featuredProjects.map((projectObject, index) => {
            return (
              <FeaturedProject fullScreen={fullScreen} projectObject={projectObject} orientation={index % 2 == 0 ? "right" : "left"} key={index} />
            )
          })
      }
    </Box>
  );
};

export default FeaturedProjectsContainer;