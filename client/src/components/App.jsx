import React from 'react';
import axios from 'axios';
import styled from 'styled-components'
import RelatedListings from './relatedListings.jsx'

const TitleDiv = styled.div`
   {
    display: flex;
    position: relative;
    width: 72%;
    margin: auto;
    white-space: nowrap;
  }
`;

const TitleTextDiv = styled.div`
{
    font-family:  Roboto, Helvetica Neue, Montserrat, sans-serif !important;
    font-size: 22px !important;
    font-weight: 800;
    line-height: 1.25em !important;
    color: rgb(72, 72, 72) !important;
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
            finish: 3,
            modal: false
        }

        this.leftClick = this.leftClick.bind(this);
        this.rightClick = this.rightClick.bind(this);
        this.likeClick = this.likeClick.bind(this);
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

    likeClick(id) {
        console.log('clicked')
        let copyListings = this.state.currentListing.slice();
        for(let i = 0; i < copyListings.length; i++) {
            if(copyListings[i].id === id) {
                if(!copyListings[i].liked) {
                    copyListings[i].liked = true;
                    this.setState({currentListing: copyListings});
                } else {
                    copyListings[i].liked = false;
                    this.setState({currentListing: copyListings})
                }
            }
        }
        
    }
    

    render() {
        
        if(this.state.currentListing.length) {
            return (
                <MainContainer>                   
                    <TitleDiv>
                        <TitleTextDiv>More places to stay</TitleTextDiv>
                    </TitleDiv>
                    <RelatedListings 
                    listings={this.state.currentListing} 
                    pos={this.state.currentIndex}
                    leftClick={this.leftClick}
                    rightClick={this.rightClick}
                    start={this.state.start}
                    finish={this.state.finish}
                    translateValue={this.state.translateValue}
                    likeClick={this.likeClick}
                    />
                    {/* <div>
                        <button onClick={this.toggleState}>Open Modal</button>
                        <div>Modal is: {this.state.modal ? "Open" : "Closed"}</div>
                        {this.state.isModalOpen && (
                            <Modal
                                id="modal"
                                isOpen={this.state.modal}
                                onClose={this.toggleState}
                                class="my-class"
                            >
                                <div className="box-body">I am the content of the modal</div>
                            </Modal>
                            )}
                    </div> */}
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