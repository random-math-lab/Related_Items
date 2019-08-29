import React from 'react';
import RelatedListingsEntry from './relatedListingsEntry.jsx'
import styled from 'styled-components'


<<<<<<< HEAD
const RightArrow = styled.span` {
    align-self: center;
    height:0;
    width: 2em;
    padding:0;
    margin: 0.5em;
    border-top: 3em solid transparent;
    border-left: 3em solid #3A003A;
    border-bottom: 3em solid transparent;
    cursor: pointer;
  }
`

const LeftArrow = styled.span` {
    align-self: center;
    height:0;
    width: 2em;
    padding:0;
    margin: 0.5em;
    border-top: 3em solid transparent;
    border-right: 3em solid #3A003A;
    border-bottom: 3em solid transparent;
    cursor: pointer;
  }
`
const ContainerDiv = styled.div`
    {
        align-self: center;
        display: flex;
        margin: 0;
        justify-content: center;
        align-content: center;
    }
`
=======

>>>>>>> master


const RelatedListings = (props) => {
    let currentListings = [];

    const SectionDiv = styled.div`
   {
    display: flex;
    position: relative;
<<<<<<< HEAD
    width: 74%;
    margin: 1;
    //height: 350px;
    overflow: hidden;
    white-space: nowrap;
    cursor: pointer;
    // transform: translateX(${props.translateValue} px),
    // transition: 'transform ease-out 3s'   

  }
`;

=======
    width: 75%;
    margin: auto;
    height: 350px;
    overflow: hidden;
    white-space: nowrap;
    transform: translateX(${props.translateValue} px),
    transition: 'transform ease-out 0.45s'
  }
`;
>>>>>>> master
    

    // const getListings = () => {
    //     currentListings.push(props.listings[props.pos]);
    //     currentListings.push(props.listings[props.pos + 1]);
    //     currentListings.push(props.listings[props.pos + 2]);
    // }

    // getListings();
<<<<<<< HEAD
    let listings = props.listings.slice(props.start, props.finish)
    return (
        <ContainerDiv >
            <LeftArrow onClick={props.leftClick}></LeftArrow>
            <SectionDiv>
                {listings.map( (listing) => {
                    return <RelatedListingsEntry key={listing.id} listing={listing}/>
                })}
            </SectionDiv>
            <RightArrow onClick={props.rightClick}></RightArrow>
        </ContainerDiv>
=======

    return (
        <SectionDiv>
                {props.listings.map( (listing) => {
                    return <RelatedListingsEntry key={listing.id} listing={listing}/>
                })}
        </SectionDiv>
>>>>>>> master
    )
}

export default RelatedListings;