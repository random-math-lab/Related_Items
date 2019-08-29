import React from 'react';
import styled from 'styled-components'




const RelatedListingsEntry = (props) => {
        
        const EntryDiv = styled.div`
        {
            position: relative;
            width: 330;
            height: 100%;
            margin: 10;
        }
        `;
    
    
         return (
             <EntryDiv >
                <img src={props.listing.img} width="330" height="65%"></img>
                <div>{props.listing.type} · {props.listing.city}</div>
                <div>{props.listing.title}</div>
                <div>${props.listing.price}/night</div>
                <div>{props.listing.rating} {props.listing.votes}</div>               
             </EntryDiv>
         )
    
}

export default RelatedListingsEntry;