import React from 'react';
// import styled from 'styled-components'
const styled = window.styled;

const TypeAndCityDiv = styled.div`
    {
        font-family:  Roboto, Helvetica Neue, Montserrat, sans-serif !important;
        font-size: 12px !important;
        font-weight: 800 !important;
        line-height: 1.33333em !important;
        color: rgb(118, 118, 118);
    }
`
const DescriptionDiv = styled.div`
    {
        font-family:  Roboto, Helvetica Neue, Montserrat, sans-serif !important;
        font-size: 18px !important;
        font-weight: 600 !important;
        line-height: 22px !important;
        color: rgb(72, 72, 72) !important;
    }
`

const PriceDiv = styled.div`
    {
        font-family:  Roboto, Helvetica Neue, Montserrat, sans-serif !important;
        font-size: 13px !important;
        font-weight: 350 !important;
        line-height: 1.2857142857142858em !important;
        color: #484848 !important;
    }
`

const EntryDiv = styled.div`
{
    position: relative;
    width: 330px;
    height: 325px;
    margin: 10px;
}
`;

const StarSpan = styled.span`
{
    font-size: 12px !important;
    font-weight: 400 !important;
    line-height: 1.33333em !important;
    color: rgb(0,139,139);
}
`

const VoteSpan = styled.span`
{
    font-size: 12px !important;
    font-weight: 400 !important;
    line-height: 1.33333em !important;
}
`

const HeartDiv = styled.div`
{
    color: white;
    fill: white;
    position: absolute;
    top: 8px;
    right: 16px;
    font-size: 25px !important;
    font-weight: 400 !important;
    opacity: 1;
}`
const LikedHeartDiv = styled.div`
{
    color: red;
    position: absolute;
    top: 8px;
    right: 16px;
    font-size: 25px !important;
    font-weight: 400 !important;
    
}`


const RelatedListingsEntry = (props) => {
    let star4 = '☆';
    let star5 = '☆';
    if(props.listing.rating > 3 ){
        star4 = '★';
    }
    if(props.listing.rating > 4 ) {
        star5 = '★';
    }
    //check if liked
    let heart = <HeartDiv onClick={ (e) => props.likeClick(props.listing.id)}>♡</HeartDiv>
    if(props.listing.liked) {
        heart = <LikedHeartDiv onClick={ (e) => props.likeClick(props.listing.id)}>♥</LikedHeartDiv>
    }
    
    
         return (
             <EntryDiv >
                <img src={props.listing.img} width="333" height="69%"></img>
                {heart}
                <TypeAndCityDiv>{props.listing.type} · {props.listing.city}</TypeAndCityDiv>
                <DescriptionDiv>{props.listing.title}</DescriptionDiv>
                <PriceDiv>${props.listing.price}/night</PriceDiv>
                <div>
                    <StarSpan>
                        <span>★</span>
                        <span>★</span>
                        <span>★</span>
                        {star4}
                        {star5}
                    </StarSpan>
                    <VoteSpan>
                        {' ' + props.listing.votes}
                    </VoteSpan>
                </div>               
             </EntryDiv>
         )
    
}

export default RelatedListingsEntry;