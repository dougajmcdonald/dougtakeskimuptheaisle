import React from 'react';
import cssmodules from 'react-css-modules';
import Header from './Header';
import WeddingDate from './WeddingDate';
import Introduction from './Introduction';
import Navigation from './Navigation';
import './app.css';

class AppComponent extends React.Component {

  render() {
    return (
      <div className="index">
        <Header />
        <WeddingDate />
        <Introduction />
        <Navigation />
      </div>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
