import React from 'react';
import cssmodules from 'react-css-modules';
import styles from './header.cssmodule.css';

class Header extends React.Component {

  render() {
    return (
      <div className="header" styleName="header">
        Doug &amp; Kim
      </div>
    );
  }
}

Header.displayName = 'Header';
Header.propTypes = {};
Header.defaultProps = {};

export default cssmodules(Header, styles);
