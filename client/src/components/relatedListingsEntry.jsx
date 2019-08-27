import React from 'react';

class RelatedListingsEntry extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }

    } 
    
    render() {
        console.log(this.props.listings)
         return (
             <div>
                 <img src={this.props.listings[0].img} width="300" height="200"></img>
                <div>{this.props.listings[0].type} · {this.props.listings[0].city}</div>
                <div>{this.props.listings[0].title}</div>
                <div>${this.props.listings[0].price}/night</div>
                <div>{this.props.listings[0].rating} {this.props.listings[0].votes}</div>               
             </div>
         )
     }
    
}

export default RelatedListingsEntry;