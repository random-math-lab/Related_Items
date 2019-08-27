// import seeder from '.../database/seeder.js'

import React from 'react';
import { shallow } from 'enzyme';
import App from '../client/src/components/App.jsx';


describe('testing app', () => {
  it('should render correctly in "debug" mode', () => {
    const component = shallow(<App />);
  
    expect(component).toMatchSnapshot();
  });
});