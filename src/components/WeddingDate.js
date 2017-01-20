import React from 'react';
import cssmodules from 'react-css-modules';
import styles from './weddingdate.cssmodule.css';

class WeddingDate extends React.Component {

  render() {
    return (
      <div className="wedding-date" styleName="wedding-date">
        20th June 2018
      </div>
    );
  }
}

WeddingDate.displayName = 'WeddingDate';
WeddingDate.propTypes = {};
WeddingDate.defaultProps = {};

export default cssmodules(WeddingDate, styles);
