import React from 'react';
import styled from 'styled-components'

<<<<<<< HEAD
=======

const EntryDiv = styled.div`
   {
    position: relative;
    max-width: 350;
    height: 100%;
    margin: 10;
  }
`;

class RelatedListingsEntry extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
>>>>>>> master

const EntryDiv = styled.div`
   {
    position: relative;
    max-width: 350;
    height: 100%;
    margin: 10;
  }
`;

class RelatedListingsEntry extends React.Component {
    constructor(props) {
        super(props);
    } 
    
    render() {
         return (
             <EntryDiv >
<<<<<<< HEAD
                <img src={this.props.listing.img} width="100%" height="60%"></img>
=======
                <img src={this.props.listing.img} width="350" height="60%"></img>
>>>>>>> master
                <div>{this.props.listing.type} · {this.props.listing.city}</div>
                <div>{this.props.listing.title}</div>
                <div>${this.props.listing.price}/night</div>
                <div>{this.props.listing.rating} {this.props.listing.votes}</div>               
             </EntryDiv>
         )
     }
    
}

export default RelatedListingsEntry;