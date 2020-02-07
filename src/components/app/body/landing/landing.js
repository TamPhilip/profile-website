import React from "react";
import PropTypes from 'prop-types';
import Grid from "@material-ui/core/Grid";
import { withStyles } from '@material-ui/styles';
import Display from "./display/index"
import { shadows } from '@material-ui/system';
import Box from '@material-ui/core/Box';


const styles = theme => ({
    landing: {
        minHeight: '100vh - 50px',
        minWidth: '100vw',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: 'calc(5px + 2vmin)',
        fontFamily: 'Merriweather, serif',
        color: 'white',
        boxShadow: "rgba(0, 0, 0, 0.2) 0px 3px 1px 2px, rgba(0, 0, 0, 0.14) 0px 2px 2px 0px, rgba(0, 0, 0, 0.12) 0px 1px 5px 0px",
    },
});

class Landing extends React.Component {
    render() {
        const { classes } = this.props;
        return (
            <div>
                    <Grid container spacing={0} className={classes.landing}>
                        <Grid item xs={6}>
                            Me<br /><br /><br />
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit <br /><br />
                            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. <br /><br />
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco <br /><br />
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco <br /><br />
                        </Grid>
                        <Grid item xs={6}>
                            <Display />
                        </Grid>
                    </Grid>
            </div>
        );
    }
}

export default withStyles(styles)(Landing);