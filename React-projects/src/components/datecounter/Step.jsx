import React from 'react';

const Step = ({ step, increaseStep, decreaseStep }) => {
    return ( 
        <>
            <div style={{display:"flex"}}>
                <button onClick={decreaseStep}>-</button>
                <h2 style={{margin:"0"}} >Step: {step}</h2>
                <button onClick={increaseStep}>+</button>
            </div>
        </>
     );
}
 
export default Step ;