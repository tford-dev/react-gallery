import React from 'react'
import Photo from "./Photo";
import NotFound from "./NotFound";

const PhotoContainer = (props) => {
    /* I am aware this is a repeat of code from performSearch from App.js, however the purpose of this additional
    code is to display the message "Results For {insert search term here}" after performSearch has been called */
    const url = window.location.pathname;
    let query;
    if(url.indexOf("/search/") !== -1){
      query = url.slice(8, url.length);
    } else {
      query = url.slice(1, url.length);
    }
    //This if statement replaces "%20" from search term in url with " "
    if(query.indexOf("%20") !== -1){
        let updatedQuery = query.split("%20").join(" ");
        query = updatedQuery;
    }
    const picResults = props.data;
    let picsData;

    //This if statement gathers image data assuming there is data to be displayed, if not, the NotFound component gets displayed
    if(picResults.length > 0){
        picsData = picResults.map(picData => 
            <Photo url={`https://live.staticflickr.com/${picData.server}/${picData.id}_${picData.secret}_w.jpg`} key={picData.id}/>    
        );
    } else {
        picsData = <NotFound />;
    }

    return(
        <div className="photo-container">
            {
            //I used the ternary operator to display the a "Results For ..." message after performSearch is called in App.js    
            (query.length > 0)
                ? <h2>Results For "{<em>{query}</em>}"</h2>
                : null
            }

            {/*The images from data retrieved are li elements from Photo.js*/}
            <ul>
                {picsData}
            </ul>
        </div>
    )
}

export default PhotoContainer;
