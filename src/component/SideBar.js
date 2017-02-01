import React, { Component } from 'react';
import { Link } from 'react-router';
import FlatButton from 'material-ui/FlatButton';


class SideBar extends Component {
  
  render() {
    let { children } = this.props;
    return (
      <div className="sidebarContent">
        <ul className="sidemenu">
          <li>
            <Link to="/"><FlatButton label="Top" /></Link>
          </li>
          <li>
            <Link to="/president"><FlatButton label="President" /></Link>
          </li>
          <li>
            <FlatButton label="default" />
          </li>
        </ul>
        <div className="">
          {children}
        </div>
      </div>
    );
  }
}

export default SideBar;