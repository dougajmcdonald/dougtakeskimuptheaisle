import React from 'react';
import cssmodules from 'react-css-modules';
import styles from './navigation.cssmodule.css';

class Navigation extends React.Component {

  render() {
    return (
      <div className="navigation" styleName="navigation">
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">Directions &amp; Locations</a></li>
          <li><a href="#">Food &amp; Drink</a></li>
          <li><a href="#">Transport</a></li>
        </ul>
      </div>
    );
  }
}

Navigation.displayName = 'Navigation';
Navigation.propTypes = {};
Navigation.defaultProps = {};

export default cssmodules(Navigation, styles);
