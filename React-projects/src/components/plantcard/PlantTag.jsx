import React from 'react';

const PlantTag = (props) => {
    return ( 
        
        <>
            {console.log(props)}
            <span style={{backgroundColor: `${props.tag[1]}`}} className="skill">{props.tag[0]}</span>
        </>
     );
}
 
export default PlantTag;