import React, { useEffect, useState } from 'react';
import { Grid } from '@material-ui/core';
import NonFeaturedProjectObject from '../../components/Projects/NonFeaturedProjects';
import { useSelector } from 'react-redux';
import { serverURL } from '../../constants/server';

const NonFeaturedProjectsContainer = () => {

    const [nonFeaturedProjects, setNonFeaturedProjects] = useState([]);
    const [error, setError] = useState(null);

    const state = useSelector((state) => state.tokenReducer);
    const token = state.items;

    useEffect(() => {
        if (!state.loading) {
            fetch(`${serverURL}/projects/getProjects`, {
                method: 'GET',
                headers: {
                    'Access-Token': token,
                    'Partition': 'non-featured'
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
                    setNonFeaturedProjects(data.projects);
                })
                .catch((error) => {
                    setError(error)
                })
        }
    }, [state.loading]);

    return (
        <Grid container spacing='4' justifyContent='center'>
            {
                nonFeaturedProjects.map((projectObject) => {
                    return (
                        <Grid item xl={4} lg={4} md={6} sm={6} xs={12}>
                            <NonFeaturedProjectObject projectObject={projectObject} />
                        </Grid>
                    )
                })
            }
        </Grid>
    )
}

export default NonFeaturedProjectsContainer;