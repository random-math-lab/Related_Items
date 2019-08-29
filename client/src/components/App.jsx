import React from 'react';
import axios from 'axios';
import styled from 'styled-components'
import RelatedListings from './relatedListings.jsx'

const TitleDiv = styled.div`
   {
    // font-family: Circular, -apple-system, BlinkMacSystemFont, Roboto, "Helvetica Neue", sans-serif !important;
    font-size: 24px !important;
    font-weight: 800 !important;
    // line-height: 1.25em !important;
    color: rgb(72, 72, 72) !important;
    font-family: Montserrat, sans-serif;
    display: flex;
    position: relative;
    width: 72%;
    margin: auto;
    white-space: nowrap;
  }
`;

const MainContainer = styled.div`
{
    justify-content: center;
    align-content: center;
}`

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentListing: [],
            currentIndex: 0,
            translateValue: 0,
            start: 0,
            finish: 3
        }

        this.leftClick = this.leftClick.bind(this);
        this.rightClick = this.rightClick.bind(this);
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

    leftClick() {
        let start = this.state.start;
        let finish = this.state.finish;
        let translateValue = this.state.translateValue;
        if (start > 0 && finish > 0) {
          this.setState({
            start: start - 1,
            finish: finish - 1,
            translateValue: translateValue + 350,
        });
        }
    }

    rightClick() {
        let start = this.state.start;
        let finish = this.state.finish;
        let translateValue = this.state.translateValue;
        console.log(this.state.currentListing.length)
        if (finish < this.state.currentListing.length) {
          this.setState({
            start: start + 1,
            finish: finish + 1,
            translateValue: translateValue - 350,
          });
        }

    }
    

    render() {
        var startindex = this.state.start;
        var finishindex = this.state.finish;
        const fadedleft =  "arrow-left";
        const fadedright = "arrow-right";
        if(this.state.currentListing.length) {
            return (
                <MainContainer>
                    <TitleDiv>MORE PLACES TO STAY</TitleDiv>
                    <RelatedListings 
                    listings={this.state.currentListing} 
                    pos={this.state.currentIndex}
                    leftClick={this.leftClick}
                    rightClick={this.rightClick}
                    start={this.state.start}
                    finish={this.state.finish}
                    translateValue={this.state.translateValue}
                    />
                </MainContainer>
            )
        }
        return (

            <div>
            </div>
        )
    }

}


export default App;