import React from "react";
import PropTypes from 'prop-types';
import Grid from "@material-ui/core/Grid";

import "./description.scss"

const Description = () => {

    return (
        <div className="description">
            <Grid container spacing={0}>
                <Grid item xs={4}>
                    
                </Grid>
                <Grid item xs={8}>
                    Computer Science student at McGill University.
                </Grid>
            </Grid>
        </div>
    );
}

export default Description;