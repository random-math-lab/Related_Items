import React from 'react';
import RelatedListingsEntry from './relatedListingsEntry.jsx'
// import styled from 'styled-components'

//const styled = window.styled;

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
        width: 1097px;
        height: 374px;
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
margin: 1px;
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
        left = <LeftArrow onClick={props.leftClick}><img src='https://relatedplaces.s3-us-west-1.amazonaws.com/LeftArrow.png' width='17' height='23'></img></LeftArrow>;
    } else {
        left = <div><img src='https://relatedplaces.s3-us-west-1.amazonaws.com/blank.png' width='17' height='23'></img></div>
    }
    if(props.finish < 12 ) {
        right = <RightArrow onClick={props.rightClick}><img src='https://relatedplaces.s3-us-west-1.amazonaws.com/RightArrow.png' width='17' height='23'></img></RightArrow>;
    } else {
        right = <div><img src='https://relatedplaces.s3-us-west-1.amazonaws.com/blank.png' width='17' height='23'></img></div>
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