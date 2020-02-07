import React from "react";
import PropTypes from 'prop-types';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { withStyles } from '@material-ui/styles';

const styles = theme => ({
    navbar: {
        width: '100vw',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: 'calc(1px + 2vmin)',
        fontFamily:  'Raleway, sans-serif',
        position: 'fixed',
        color: 'white',
        zIndex: 1,
        transition: 'top 0.3s', 
    },
});

class Navbar extends React.Component {
    render() {
        const { classes } = this.props;
       

        return (
            <div className={classes.navbar}>
                <Tabs
                    // value={value}
                    // indicatorColor="primary"
                    // textColor="primary"
                    // onChange={handleChange}
                    centered
                >
                    <Tab label="Me" />
                    <Tab label="About" />
                    <Tab label="Projects" />
                </Tabs>
            </div>
        );
    }
    componentDidMount() {
        var prevScrollPosition = window.pageYOffset;
        const { classes } = this.props;
        window.onscroll = function () {
            var currentScrollPos = window.pageYOffset;
            if (prevScrollPosition > currentScrollPos) {
                document.getElementsByClassName(classes.navbar)[0].style.top = "0";
            } else {
                document.getElementsByClassName(classes.navbar)[0].style.top = "-50px";
            }
            prevScrollPosition = currentScrollPos;
        }
    }
}

Navbar.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Navbar);

