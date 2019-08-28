import React from 'react';
import RelatedListingsEntry from './relatedListingsEntry.jsx'
import styled from 'styled-components'





const RelatedListings = (props) => {
    let currentListings = [];

    const SectionDiv = styled.div`
   {
    display: flex;
    position: relative;
    width: 75%;
    margin: auto;
    height: 350px;
    overflow: hidden;
    white-space: nowrap;
    transform: translateX(${props.translateValue} px),
    transition: 'transform ease-out 0.45s'
  }
`;
    

    // const getListings = () => {
    //     currentListings.push(props.listings[props.pos]);
    //     currentListings.push(props.listings[props.pos + 1]);
    //     currentListings.push(props.listings[props.pos + 2]);
    // }

    // getListings();

    return (
        <SectionDiv>
                {props.listings.map( (listing) => {
                    return <RelatedListingsEntry key={listing.id} listing={listing}/>
                })}
        </SectionDiv>
    )
}

export default RelatedListings;