import React from 'react';
import cssmodules from 'react-css-modules';
import styles from './map.cssmodule.css';

@cssmodules(styles)
class Map extends React.Component {

  render() {
    return (
      <div className="map-component" styleName="map-component">
        Please edit src/components//Map.js to update this component!
      </div>
    );
  }
}

Map.displayName = 'Map';
Map.propTypes = {};
Map.defaultProps = {};

export default Map;
