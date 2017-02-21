import React, { Component } from 'react';
import { Link } from 'react-router';
import { AppBar, FlatButton } from 'material-ui';

/**
 * ヘッダーコンポーネント
 */
class Header extends Component {
  
  render() {
    let { children } = this.props;
    return (
      <header className="header">
      　<AppBar>
          <ul className="headerButtons">
            <li className="headerButton">
              <Link to="/"><FlatButton label="Top" /></Link>
            </li>
            <li className="headerButton">
              <Link to="/president"><FlatButton label="President" /></Link>
            </li>
            <li className="headerButton">
              <FlatButton label="default" />
            </li>
          </ul>
        </AppBar>
        <div className="mainSection">
          { children }
        </div>
      </header>
    );
  }
}

export default Header;