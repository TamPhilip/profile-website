import React from 'react';
import PropTypes from 'prop-types';
import Description from './description/index';
import WorkExperience from './work-experience/index';
import Projects from './projects/index';
import Landing from './landing/index';

import "./body.scss"

const Body = () => {
    return (
        <div className="body">
            <body>
                <Landing/>
                {/* <Description/> */}
                {/* <WorkExperience/> */}
                {/* <Projects/> */}
            </body>
        </div>
    );
}

Body.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default Body;