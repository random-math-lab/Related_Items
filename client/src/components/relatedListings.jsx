import React from 'react';
import RelatedListingsEntry from './relatedListingsEntry.jsx'
import styled from 'styled-components'


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
        width: 100%;
        overflow: hidden;
        display: flex;
        margin: 0;
    }
`

const MainContainerDiv = styled.div`
    {
        width: 86%;
        align-self: center;
        display: flex;
        margin: 0 auto;
        justify-content: center;
        align-content: center;
    }
`

const SectionDiv = styled.div`
{
display: flex;
position: relative;
margin: 1;
//height: 350px;
white-space: nowrap;
cursor: pointer;
transform: translateX(${props => props.translateValue}px);
transition: transform linear .25s;
}
`

const RelatedListings = (props) => {
    let currentListings = [];
    console.log(props.translateValue)
    
    
    
    
    // const getListings = () => {
        //     currentListings.push(props.listings[props.pos]);
        //     currentListings.push(props.listings[props.pos + 1]);
        //     currentListings.push(props.listings[props.pos + 2]);
        // }
        
        // getListings();
        let listings = props.listings;
        console.log(listings);
        return (
            <MainContainerDiv>
            <LeftArrow onClick={props.leftClick}></LeftArrow>
        <ContainerDiv >
            <SectionDiv translateValue={props.translateValue}>
                {listings.map( (listing) => {
                    return <RelatedListingsEntry 
                    key={listing.id} 
                    listing={listing}
                    translateValue={props.translateValue}
                    />
                })}
            </SectionDiv>
        </ContainerDiv>
            <RightArrow onClick={props.rightClick}></RightArrow>

        </MainContainerDiv>
    )
}


export default RelatedListings;