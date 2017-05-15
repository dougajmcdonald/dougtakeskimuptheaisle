import React from 'react';
import { shallow } from 'enzyme';
import SiteHeader from 'components\SiteHeader.js';

describe('<SiteHeader />', function () {

  let component;
  beforeEach(function () {
    component = shallow(<SiteHeader />);
  });

  describe('when rendering the component', function () {

    it('should have a className of "siteheader-component"', function () {
      expect(component.hasClass('siteheader-component')).to.equal(true);
    });
  });
});
