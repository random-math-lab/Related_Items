import React from 'react';

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
        fetch('/api/relatedPlaces/1')    
        .then( (data) =>  (data.json()) )
        .then( (message) => JSON.stringify(message) )
        .then( (string) => JSON.parse(string) )
        .then( (output) => this.setState( {currentListing: output} ) )
    }
    

    render() {
        if(this.state.currentListing.length) {
            return (
                <div></div>
            )
        }
        return (

            <div>
            </div>
        )
    }

}

export default App;