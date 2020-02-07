import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/styles';
import Header from './header/index';
import Body from './body/index';

const styles = theme => ({
    app: {
        position: 'absolute',
        overflow: 'auto',
        textAlign: 'center',
    },
});

class App extends React.Component {
    render() {
        const { classes } = this.props;
        return (
            <div className={classes.app} >
                <Header/>
                <Body/>
            </div>
        );
    }
}


App.propTypes = {
    classes: PropTypes.object.isRequired,
};


export default withStyles(styles)(App);
