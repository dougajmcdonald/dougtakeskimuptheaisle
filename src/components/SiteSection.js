import React from 'react';
import cssmodules from 'react-css-modules';
import styles from './sitesection.cssmodule.scss';

class SiteSection extends React.Component {

  render() {
    return (
      <div>
        <div className="sitesection-angled-bottom" styleName="sitesection-angled-bottom"></div>
        <div className="sitesection-component" styleName="sitesection-component">
          <h2><i className="fa fa-lg fa-clock-o"></i> Time &amp; Date</h2>
        </div>
      </div>
    );
  }
}

SiteSection.displayName = 'SiteSection';
SiteSection.propTypes = {};
SiteSection.defaultProps = {};

export default cssmodules(SiteSection, styles);
