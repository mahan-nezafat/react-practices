import React from 'react';
import Service from './Service';
const Services = ({ selectValue1, setSelectValue1, selectValue2, setSelectValue2 }) => {

    

    return ( 
        <>
            <Service selectValue={selectValue1} setSelectValue={setSelectValue1} >How did like the service</Service>            
            <Service selectValue={selectValue2} setSelectValue={setSelectValue2} >How did your friend like the service</Service>            
        </>
     );
}
 
export default Services;