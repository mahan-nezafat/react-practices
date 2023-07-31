import React from 'react';

const Service = ({ children, selectValue, setSelectValue }) => {


   
    return ( 
        <>
            <label>{children}</label>  
            <select value={selectValue} onChange={(e) => setSelectValue(e.target.value)}>
                <option value='0'>Dessatisfied (0%)</option>
                <option value='5'>it was okay (5%)</option>
                <option value='10'>it was good (10%)</option>
                <option value='20'>Absolutely amazing (20%)</option>
            </select>
        </>
     );
}
 
export default Service;