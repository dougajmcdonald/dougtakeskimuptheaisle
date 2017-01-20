import React from 'react';
import { shallow } from 'enzyme';
import Map from 'components//Map.js';

describe('<Map />', () => {

  let component;
  beforeEach(() => {
    component = shallow(<Map />);
  });

  describe('when rendering the component', () => {

    it('should have a className of "map-component"', () => {
      expect(component.hasClass('map-component')).to.equal(true);
    });
  });
});
