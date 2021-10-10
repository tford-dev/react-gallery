import React from 'react';
import Photo from "./Photo";
import NotFound from "./NotFound";

const PhotoContainer = (props) => {
    const picResults = props.data;
    let picsData;
    if(picResults.length > 0){
        picsData = picResults.map(picData => 
            <Photo url={`https://live.staticflickr.com/${picData.server}/${picData.id}_${picData.secret}_w.jpg`} key={picData.id}/>    
        );
    } else {
        picsData = <NotFound />
    }

    return(
        <div className="photo-container">
            <h2>Results</h2>
            <ul>
                {picsData}
            </ul>
        </div>
    )
}

export default PhotoContainer;
