import React from 'react';
import App from './App';
import { shallow } from 'enzyme';

describe('Component [App]', () => {
  it('should render', () => {
    const component = shallow(<App />);

    expect(component).toHaveLength(1);
  });
});
