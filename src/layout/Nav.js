import React from 'react';
import { Link } from "react-router-dom";
import { Grid } from '@material-ui/core';
import '../css/nav.css';


const Nav = () => {
    return (
        <Grid container className="nav-bar">
            <Grid item xs={2} className="nav-item">
                 <Link to="/">logo</Link>
            </Grid>
            <Grid item xs={2} className="nav-item">
                <Link to="/ki">all KIs</Link>
            </Grid>
            <Grid item xs={6}>
                <input placeholder="search.." />
            </Grid>
            <Grid item xs={2} className="nav-item">
                <Link to="/ki">+ New KI</Link>
            </Grid>
        </Grid>
    )
};

export default Nav
