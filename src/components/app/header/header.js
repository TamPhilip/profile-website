import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/styles';
import Navbar from "./navbar/index"

const styles = theme => ({
  appHeader: {
    backgroundColor: '#282c34',
    top: 0,
    height: '50px',
    zIndex: 1,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 'calc(20px + 2vmin)',
    color: 'white',
    fontFamily: 'Inria Serif, serif',
  }
});

class Header extends React.Component {
  render() {
    const { classes } = this.props;
      return (
        <div>
          <header className ={classes.appHeader}>
            <Navbar/>
          </header>
        </div>  
      );
  }
}

Header.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Header);
