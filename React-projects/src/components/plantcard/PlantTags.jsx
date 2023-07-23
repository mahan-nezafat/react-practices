import React from 'react';
import PlantTag from './PlantTag';

const PlantTags = (props) => {
    return ( 
        <>
            <div className="skill-list">
                {
                    props.tags.map((tag) => {
                        // console.log(tag[0],tag[1])
                        return <PlantTag tag={tag}  />
                    })
                }
            </div>
        </>
     );
}
 
export default PlantTags;