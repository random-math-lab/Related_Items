import React from 'react';
import RelatedListingsEntry from './relatedListingsEntry.jsx'

const RelatedListings = (props) => {
    return (
        <div>
            <RelatedListingsEntry listings={props.listings}/>
        </div>
    )
}

export default RelatedListings;