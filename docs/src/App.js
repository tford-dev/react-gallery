import React, { Component } from 'react'
import axios from "axios";
import './css/index.css';
import apiKey from "./config";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

//App components
import Nav from "./Components/Nav";
import Search from "./Components/Search";
import PhotoContainer from "./Components/PhotoContainer";

class App extends Component {
  constructor(){
    super();
    this.state = {
      picsData: [],
      isLoading: true,
    }
  }

  componentDidMount(){
    this.performSearch()
  }

  performSearch = (query = "bmx street") =>{
    axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&per_page=16&page=1&format=json&nojsoncallback=1`)
    .then((response)=>{
      this.setState({
        picsData: response.data.photos.photo,
        isLoading: false,
      });
    })
    .catch((error)=>{
      console.log("Error fetching and parsing data", error);
    });
  }
  render(){
    console.log(this.state.picsData);
  
    return (
        <div className="container">
          <Search onSubmit={this.performSearch}/>
          <Nav />
          {
                (this.state.isLoading)
                  ? <h3>Loading...</h3>
                  :  <PhotoContainer data={this.state.picsData} />
          }
        </div>
    );

  }
  
}

export default App;
