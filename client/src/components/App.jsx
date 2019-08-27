import React from 'react';
import axios from 'axios';
import RelatedListings from './relatedListings.jsx'

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentListing: [],
        }
    }

    componentDidMount() {
        this.getData();
    }

    getData() {
        axios('/api/relatedPlaces/1')
        .then( (res) => res.data )
        .then( (places) => this.setState({currentListing : places}) )
        // fetch('/api/relatedPlaces/1')    
        // .then( (data) =>  (data.json()) )
        // .then( (message) => JSON.stringify(message) )
        // .then( (string) => JSON.parse(string) )
        // .then( (output) => this.setState( {currentListing: output} ) )
    }
    

    render() {
        if(this.state.currentListing.length) {
            return (
                <RelatedListings listings={this.state.currentListing}/>
            )
        }
        return (

            <div>
            </div>
        )
    }

}

export default App;