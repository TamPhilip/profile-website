import React from "react";
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/styles';
import bench1 from "../../../../../assets/images/bench_1.jpg";

const styles = theme => ({
    display: {
        height: '100vh',
        width: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: 'calc(10px + 2vmin)',
        color: 'white',
        backgroundImage: "linear-gradient( rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05) ), url(" + bench1 + ")",
        backgroundRepeat: "no-repeat, no-repeat",
        backgroundPosition: "center, center",
        backgroundSize: 'contain',
        WebkitFilter: "drop-shadow(2px 2px 2px rgba(1, 1, 1, 1))",
        filter: "drop-shadow(2px 2px 2px rgba(1, 1, 1, 1))",
        overflowX: 'hidden'
    },
    grid: {

    },
});

class Display extends React.Component {
    render() {
        const { classes } = this.props;
        return (
            <div className={classes.display}>
                
            </div>
        );
    }
}

export default withStyles(styles)(Display);