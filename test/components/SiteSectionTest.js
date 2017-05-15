import React from 'react';
import { shallow } from 'enzyme';
import SiteSection from 'components\SiteSection.js';

describe('<SiteSection />', function () {

  let component;
  beforeEach(function () {
    component = shallow(<SiteSection />);
  });

  describe('when rendering the component', function () {

    it('should have a className of "sitesection-component"', function () {
      expect(component.hasClass('sitesection-component')).to.equal(true);
    });
  });
});
