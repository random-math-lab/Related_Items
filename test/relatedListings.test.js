import React from 'react';
import { shallow } from 'enzyme';
import RelatedListings from '../client/src/components/relatedListings.jsx';


describe('relatedListings', () => {
    const sampleData = [
        {
            "id": 18,
            "type": "ENTIRE HOUSE",
            "title": "saepe et doloremque",
            "city": "New Eddieview",
            "price": 120,
            "rating": 4,
            "votes": 398,
            "img": "https://relatedplaces.s3-us-west-1.amazonaws.com/18.jpg"
        },
        {
            "id": 21,
            "type": "ENTIRE LOEFT",
            "title": "quisquam ut odio",
            "city": "Port Karli",
            "price": 103,
            "rating": 3,
            "votes": 705,
            "img": "https://relatedplaces.s3-us-west-1.amazonaws.com/21.jpg"
        },
        {
            "id": 31,
            "type": "ENTIRE HOUSE",
            "title": "velit voluptatem nesciunt",
            "city": "Weberside",
            "price": 98,
            "rating": 4,
            "votes": 545,
            "img": "https://relatedplaces.s3-us-west-1.amazonaws.com/31.jpg"
        }
    ]
    const component = shallow(<RelatedListings listings={sampleData} pos={0}/>);
    
    it('should render 3 places', () => {
        expect(component.children().length).toBe(3);
    })
    
  it('should render RelatedListings', () => {
  
    expect(component).toMatchSnapshot();
  })


})