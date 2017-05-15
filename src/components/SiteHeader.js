import React from 'react';
import cssmodules from 'react-css-modules';
import styles from './siteheader.cssmodule.scss';

class SiteHeader extends React.Component {

  render() {
    return (
      <div className="siteheader-component" styleName="siteheader-component">
        Doug &amp; Kimberley
      </div>
    );
  }
}

SiteHeader.displayName = 'SiteHeader';
SiteHeader.propTypes = {};
SiteHeader.defaultProps = {};

export default cssmodules(SiteHeader, styles);
