import React from 'react';
import SiteHeader from './SiteHeader';
import SiteSection from './SiteSection';
import './app.cssmodule.scss';

class AppComponent extends React.Component {

  render() {
    return (
      <div className="index">
        <SiteHeader />
        <SiteSection />
      </div>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
