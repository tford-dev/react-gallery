import React, { Component } from 'react'
import App from "../App"
import apiKey from "../config";
import axios from "axios";
import PhotoContainer from "./PhotoContainer";
import Nav from "./Nav";
import Search from "./Search";

class Results extends Component {
    constructor(props){
        super(props);
        this.state = {
            resultsData: []
        }
        this.componentDidMount = this.componentDidMount.bind(this);
    }
    
    componentDidMount = () => {
        const title = this.props.location.state.queryName;
        axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${title}&per_page=16&page=1&format=json&nojsoncallback=1`)
        .then((response)=>{
        this.setState({
        resultsData: [],
        resultsData: response.data.photos.photo,
        isLoading: false
        })
    })
    .catch((error)=>{
      console.log("Error fetching and parsing data", error);
    });
    }

    render(){
        console.log(this.props)
        return(
        <div className="container">
            <Search onSubmit={this.componentDidMount}/>
            <Nav />
            {
                (this.state.isLoading)
                ? <h3>Loading...</h3>
                :  <PhotoContainer data={this.state.resultsData} />
            }
        </div>
        )
    }
}

export default Results;