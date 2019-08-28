// import seeder from '.../database/seeder.js'

import React from 'react';
import { shallow } from 'enzyme';
import App from '../client/src/components/App.jsx';


describe('App', () => {
  it('should render App', () => {
    const component = shallow(<App />);
  
    expect(component).toMatchSnapshot();
  });

//   it('should run getData once', () => {
//       expect(App.getData).toHaveBeenCalled();
//   })

});