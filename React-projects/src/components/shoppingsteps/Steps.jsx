import React from 'react';

const Steps = ({ step, handleClose }) => {


    return ( 
        <>
            <div className="numbers">
                <div onClick={handleClose} className="close">&times;</div> 
                    <div className={step >= 1 ? "active" : ""}>1</div>
                    <div className={step >= 2 ? "active" : ""}>2</div>
                    <div className={step >= 3 ? "active" : ""}>3</div>
                    <div className={step >= 4 ? "active" : ""}>4</div>
                    <div className={step >= 5 ? "active" : ""}>5</div>
                
            </div>
        </>
     );
}
 
export default Steps ;