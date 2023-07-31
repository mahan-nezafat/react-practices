import React from 'react';

const Bill = ({ bill, setBill }) => {

    return ( 
        <>    
            <label>How much was the bill ?</label>
            <input type="number" value={bill} onChange={(e) => setBill(e.target.value)} />
        </>
     );
}
 
export default Bill;