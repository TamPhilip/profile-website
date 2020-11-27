import React from "react";
import PropTypes from 'prop-types';
import Display from "./display/index";

import "./landing.scss";


const Landing = () => {
    return (
        <div>
            <div container spacing={0} className="landing">
                <div className="landing--text">
                    <div>
                        
                    </div>
                    Me
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco 
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco 
                </div>
                <div className="landing--display">
                    <Display />
                </div>
            </div>
        </div>
    );
}

export default Landing;