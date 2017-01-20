import React from 'react';
import { shallow } from 'enzyme';
import Navigation from 'components//Navigation.js';

describe('<Navigation />', () => {

  let component;
  beforeEach(() => {
    component = shallow(<Navigation />);
  });

  describe('when rendering the component', () => {

    it('should have a className of "navigation-component"', () => {
      expect(component.hasClass('navigation-component')).to.equal(true);
    });
  });
});
