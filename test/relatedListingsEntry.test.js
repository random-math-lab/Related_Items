import React from 'react';
import { shallow } from 'enzyme';
import RelatedListingsEntry from '../client/src/components/relatedListings.jsx';

describe('relatedListingsEntry', () => {
    const sampleData = {
        "id": 18,
            "type": "ENTIRE HOUSE",
            "title": "saepe et doloremque",
            "city": "New Eddieview",
            "price": 120,
            "rating": 4,
            "votes": 398,
            "img": "https://relatedplaces.s3-us-west-1.amazonaws.com/18.jpg"
    }

    const component = shallow(<RelatedListingsEntry listing={sampleData}/>);

    it('should render RelatedListingsEntry', () => {
  
        expect(component).toMatchSnapshot();
      })

})