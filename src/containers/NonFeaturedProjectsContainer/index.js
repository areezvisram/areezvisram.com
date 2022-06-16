import React, { useEffect, useState } from 'react';
import { Grid } from '@material-ui/core';
import NonFeaturedProjectObject from '../../components/Projects/NonFeaturedProjects';
import { useSelector } from 'react-redux';

const NonFeaturedProjectsContainer = () => {

    const [nonFeaturedProjects, setNonFeaturedProjects] = useState([]);
    const [error, setError] = useState(null);

    const state = useSelector((state) => state.tokenReducer);
    const token = state.items;

    // useEffect(() => {
    //     if(!state.loading) {
    //         fetch("http://localhost:5000/projects/getProjects", {
    //             method: 'GET',
    //             headers: {
    //                 'Access-Token': token,
    //                 'Partition': 'non-featured'
    //             }
    //         }) 
    //         .then((response) => {
    //             if(response.ok) {
    //                 return response.json();
    //             }
    //             throw response;
    //         })
    //         .then((data) => {
    //             console.log(data.projects);
    //             setNonFeaturedProjects(data.projects);
    //         })
    //         .catch((error) => {
    //             setError(error)
    //         })
    //     }
    // }, [state.loading]);

    const testNonFeaturedProjectData = [
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
        <Grid container spacing='4' justifyContent='center'>
            {
                testNonFeaturedProjectData.map((projectObject) => {
                    return (
                        <Grid item xl={4} lg={4} md={6} sm={6}  xs={12}>
                            <NonFeaturedProjectObject projectObject={projectObject} />
                        </Grid>
                    )
                })
            }
            {/* <Grid item xl={4} lg={4} md={6} sm={6} xs={12}>
                <NonFeaturedProjectObject />
            </Grid>
            <Grid item xl={4} lg={4} md={6} sm={6}  xs={12}>
                <NonFeaturedProjectObject />
            </Grid>
            <Grid item xl={4} lg={4} md={6} sm={6}  xs={12}>
                <NonFeaturedProjectObject />
            </Grid>
            <Grid item xl={4} lg={4} md={6} sm={6}  xs={12}>
                <NonFeaturedProjectObject />
            </Grid>    
            <Grid item xl={4} lg={4} md={6} sm={6}  xs={12}>
                <NonFeaturedProjectObject />
            </Grid>    
            <Grid item xl={4} lg={4} md={6} sm={6}  xs={12}>
                <NonFeaturedProjectObject />
            </Grid>             */}
        </Grid>
    )
}

export default NonFeaturedProjectsContainer;