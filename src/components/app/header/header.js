import React from 'react';
import Icon from './icon/index';
import Text from './text/index';
import Link from './link/index'
import './header.css';

class Header extends React.Component {
  render() {
      return (
        <div className = "header" >
          <header className="app-header">
            <Icon />
            <Text />
            <Link />
          </header>
        </div>  
      );
  }
}

export default Header;
