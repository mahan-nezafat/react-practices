import React, { useState } from 'react';
import PlantImage from './PlantImage';
import PlantSummary from './PlantSummary';
import PlantTags from './PlantTags';
import './plant.css'
import bonsai from '../../assets/bonsai.jpg' 

const PlantCard = () => {

    const [plant, setPlant] = useState({
        header: 'Bonsai',
        description: 'A bonsai plant is a miniature tree grown in a container, carefully pruned and shaped to create a small, artistic representation of nature.',
        tags: [['Japanese culture','blue'],['Tree cultivation','orange'],['Gardening','green'],['Miniature trees','red']],
        image: `${bonsai}`
    })

    return ( 
        <>
            <div className="card">
                <PlantImage image={plant.image}/>
                <PlantSummary header={plant.header} description={plant.description} />
                <PlantTags tags={plant.tags} />
            </div>
        </>
    );
}
 
export default PlantCard;