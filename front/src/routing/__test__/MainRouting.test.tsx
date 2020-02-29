import React from 'react';
import { shallow } from 'enzyme';
import { MainRouting } from '../index';

describe('Component [MainRouting]', () => {
  it('should render', () => {
    const component = shallow(<MainRouting />);

    expect(component.find('Provider')).toHaveLength(1);
    expect(component.find('Switch')).toHaveLength(1);
    expect(component.find('Route')).toHaveLength(1);
  });
});
