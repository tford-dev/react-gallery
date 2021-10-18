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

  //The performSearch method of the component uses parts of the url at the top of the browser for searching
  performSearch = () =>{
    let query;
    if(window.location.pathname === "/react-gallery"){
      query = "amg"
    } else {
      query = this.props.match.params.id;
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

  //componentDidMount is used to call performSearch for when the app is first loaded
  componentDidMount(){
    this.performSearch();
  }

  render(){
    //window.onpopstate is used to refresh the page when the forward or back button is pushed in the browser
    window.onpopstate = (e) => {
      window.location.reload();
    };

    const queryString = this.props.match.params.id;
    
    return (
      <div className="container">
        <Search onSearch={this.performSearch} />

        {/*performSearch is called when a Nav li element is clicked*/}
        <Nav funcCall={this.performSearch} />

        {
          //If data is loading, "loading..." will appear before data is retrieved
          (window.location.pathname !== "/error")
            ? (this.state.isLoading)
                ? <h3>Loading...</h3>
                :  <PhotoContainer data={this.state.picsData} searchString={queryString}/>
            //If data cannot be retrieved, then the Error component will be rendered
            : <Error />
        }
      </div>
    );
  }
}

export default App;