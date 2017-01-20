import React from 'react';
import { shallow } from 'enzyme';
import WeddingDate from 'components//WeddingDate.js';

describe('<WeddingDate />', () => {

  let component;
  beforeEach(() => {
    component = shallow(<WeddingDate />);
  });

  describe('when rendering the component', () => {

    it('should have a className of "weddingdate-component"', () => {
      expect(component.hasClass('weddingdate-component')).to.equal(true);
    });
  });
});
