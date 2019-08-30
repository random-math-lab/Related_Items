import React from 'react';
import RelatedListingsEntry from './relatedListingsEntry.jsx'
import styled from 'styled-components'


const RightArrow = styled.span` {
    width: 20px;
    height: 20px;
    padding:0;
    margin-top: 124.5px;
    cursor: pointer;
  }
`

const LeftArrow = styled.span` {
    width: 20px;
    height: 20px;
    padding:0;
    margin-top: 124.5px;
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
        width: 76.9999%;
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
    let left;
    let right;
    if(props.start > 0 ) {
        left = <LeftArrow onClick={props.leftClick}><img src='LeftArrow.png' width='17' height='23'></img></LeftArrow>;
    } else {
        left = <div><img src='blank.png' width='17' height='23'></img></div>
    }
    if(props.finish < 12 ) {
        right = <RightArrow onClick={props.rightClick}><img src='RightArrow.png' width='17' height='23'></img></RightArrow>;
    } else {
        right = <div><img src='blank.png' width='17' height='23'></img></div>
    }

        let listings = props.listings;
        return (
            <MainContainerDiv>
            {left}
        <ContainerDiv >
            <SectionDiv translateValue={props.translateValue}>
                {listings.map( (listing) => {
                    return <RelatedListingsEntry 
                    key={listing.id} 
                    listing={listing}
                    translateValue={props.translateValue}
                    likeClick={props.likeClick}
                    />
                })}
            </SectionDiv>
        </ContainerDiv>
            {right}

        </MainContainerDiv>
    )
}


export default RelatedListings;