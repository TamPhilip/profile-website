import React from "react";
import PropTypes from 'prop-types';
import Grid from "@material-ui/core/Grid";
import { withStyles } from '@material-ui/styles';

const styles = theme => ({
    description: {
        minHeight: '100vh',
        minWidth: '100vw',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: 'calc(10px + 2vmin)',
        color: 'white',
    },
    paper: {
        minHeight: '90vh',
    }
});

class Description extends React.Component {
    render() {
        const { classes } = this.props;
        return (
            <div className={classes.description}>
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
}

export default withStyles(styles)(Description);