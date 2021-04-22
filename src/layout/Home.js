import React from 'react';
import { Grid } from '@material-ui/core';
import MainBody from './MainBody'

const Home = () => {
    return (
        <Grid container>
            <Grid item xs={12}>
                <MainBody />
            </Grid>
            <Grid item xs={12} className="grid-item">
                Footer
            </Grid>
        </Grid>
    )
};

export default Home
