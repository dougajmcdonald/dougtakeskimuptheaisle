import React from 'react';
import cssmodules from 'react-css-modules';
import styles from './introduction.cssmodule.css';

@cssmodules(styles)
class Introduction extends React.Component {

  render() {
    return (
      <div className="introduction" styleName="introduction">
        <p>
          Doug &amp; Kim would like to invite you to our <b>What you need to know</b> wedding site.
        </p>
        <p>
          We've tried to cover the type of common questions which may come up and have chosen this website
          as the medium for communication the answers.
        </p>
      </div>
    );
  }
}

Introduction.displayName = 'Introduction';
Introduction.propTypes = {};
Introduction.defaultProps = {};

export default Introduction;
