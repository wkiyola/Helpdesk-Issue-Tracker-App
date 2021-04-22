import React from 'react';
import { Grid } from '@material-ui/core';
import '../css/mainBody.css';
import LeftSidebar from '../components/LeftSidebar'
import RightSidebar from '../components/RightSidebar'
import MainContent from '../components/MainContent';


function MainBody() {
    return (
        <Grid container alignItems="stretch" style={{height: '90vh'}}>
            <Grid item xs={2} className="grid-item">
                <LeftSidebar />
            </Grid>
            <Grid item xs={7} className="grid-item">
                <MainContent />
            </Grid>
            <Grid item xs={3} className="grid-item">
                <RightSidebar />
            </Grid>
        </Grid>
    )
}

export default MainBody
