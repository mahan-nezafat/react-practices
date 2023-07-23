import React from 'react';

const PlantSummary = (props) => {
    return ( 
        <>
            <div className="data">
                <h1>{props.header}</h1>
                <p>{props.description}</p>
            </div>

        </>
     );
}
 
export default PlantSummary;