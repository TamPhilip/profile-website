import React from 'react';
import Header from './header/index';
import Body from './body/index';
import './app.css';

class App extends React.Component {
    render() {
        return (
            <div className="app" >
                <Header/>
                <Body/>
            </div>
        );
    }
}

export default App;
