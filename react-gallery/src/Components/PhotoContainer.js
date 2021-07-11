import React from 'react'
import Photo from "./Photo";
import NotFound from "./NotFound";

const PhotoContainer = (props) => {
    const url = window.location.pathname;
    let query;
    if(url.indexOf("/search/") !== -1){
      query = url.slice(8, url.length);
    } else {
      query = url.slice(1, url.length);
    }
    const picResults = props.data;
    let picsData;
    if(picResults.length > 0){
        picsData = picResults.map(picData => 
            <Photo url={`https://live.staticflickr.com/${picData.server}/${picData.id}_${picData.secret}_w.jpg`} key={picData.id}/>    
        );
    } else {
        picsData = <NotFound />;
    }

    return(
        <div className="photo-container">
            <h2>Results For "{<em>{query}</em>}"</h2>
            <ul>
                {picsData}
            </ul>
        </div>
    )
}

export default PhotoContainer;
