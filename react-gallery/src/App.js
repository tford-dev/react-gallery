import React, { Component } from 'react';
import axios from "axios";
import './css/index.css';
import apiKey from "./config";

//App components
import Nav from "./Components/Nav";
import Search from "./Components/Search";
import PhotoContainer from "./Components/PhotoContainer";
import NotFound from './Components/NotFound';
import Error from './Components/Error';

class App extends Component {
  constructor(){
    super();
    this.state = {
      picsData: [],
      isLoading: true,
    }
  }

  componentDidMount(){
    this.performSearch();
  }

  performSearch = () =>{
    const url = window.location.pathname;
    let query;
    if(url.indexOf("/search/") !== -1){
      query = url.slice(8, url.length);
    } else {
      query = url;
    }
    axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&per_page=16&page=1&format=json&nojsoncallback=1`)
    .then((response)=>{
      this.setState({
        picsData: response.data.photos.photo,
        isLoading: false,
      });
    })
    .catch((error)=>{
      console.log("Error fetching and parsing data", error);
      this.setState({picsData: <NotFound />})
    });
  }
  render(){
    console.log(this.state.picsData);
    return (
      <div className="container">
        <Search onSearch={this.performSearch} />
        <Nav funcCall={this.performSearch} />
        { 
          (window.location.pathname !== "/error")
            ? (this.state.isLoading)
                ? <h3>Loading...</h3>
                :  <PhotoContainer data={this.state.picsData} />
            : <Error />
        }
      </div>
    );
  }
}

export default App;