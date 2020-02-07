import React from 'react';
import PropTypes from 'prop-types';
import Description from './description/index';
import WorkExperience from './work-experience/index';
import Projects from './projects/index';
import { withStyles } from '@material-ui/styles';
import Landing from './landing/index';

const styles = theme => ({
    body: {
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: 'calc(10px + 2vmin)',
        color: 'white',
        backgroundColor: '#282c34',
    }

});

class Body extends React.Component {
    render() {
        const {classes} = this.props
        return (
            <div className={classes.body}>
                <body>
                    <Landing/>
                    <Description/>
                    {/* <WorkExperience/> */}
                    {/* <Projects/> */}
                </body>
            </div>
        );
    }
}

Body.propTypes = {
    classes: PropTypes.object.isRequired,
};


export default withStyles(styles)(Body);