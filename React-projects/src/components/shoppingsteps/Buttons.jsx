import React from 'react';

const Buttons = ({ handleNext, handlePrev }) => {
    return ( 
        <>
            <div className="buttons">
                <button onClick={handlePrev}><span>Previous</span></button>
                <button onClick={handleNext}><span>Next</span></button>
            </div>
        </>
     );
}
 
export default Buttons;