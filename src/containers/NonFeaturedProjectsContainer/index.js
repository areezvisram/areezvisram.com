import React from 'react';
import { Grid } from '@material-ui/core';
import NonFeaturedProjectObject from '../../components/Projects/NonFeaturedProjects';

const NonFeaturedProjectsContainer = () => {

    return (
        <Grid container spacing='4'>
            <Grid item xl={4} lg={4} md={6} sm={6}>
                <NonFeaturedProjectObject />
            </Grid>
            <Grid item xl={4} lg={4} md={6} sm={6}>
                <NonFeaturedProjectObject />
            </Grid>
            <Grid item xl={4} lg={4} md={6} sm={6}>
                <NonFeaturedProjectObject />
            </Grid>
            <Grid item xl={4} lg={4} md={6} sm={6}>
                <NonFeaturedProjectObject />
            </Grid>    
            <Grid item xl={4} lg={4} md={6} sm={6}>
                <NonFeaturedProjectObject />
            </Grid>    
            <Grid item xl={4} lg={4} md={6} sm={6}>
                <NonFeaturedProjectObject />
            </Grid>            
        </Grid>
    )
}

export default NonFeaturedProjectsContainer;