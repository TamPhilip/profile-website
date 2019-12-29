import React from 'react';
import logo from '../../../../assets/images/logo.svg'

class Icon extends React.Component {
     render() {
        return (
            <div className="app">
                <img src={logo} className="app-logo" alt="logo" />
            </div>
        );
    }
}


export default Icon;
