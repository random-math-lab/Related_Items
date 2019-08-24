import React from 'react';

class RelatedListingsEntry extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }

    } 
    
    render() {
         return (
             <div>
                 <img src={this.props.listings[0].img} width="200" height="200"></img>
             </div>
         )
     }
    
}

export default RelatedListingsEntry;