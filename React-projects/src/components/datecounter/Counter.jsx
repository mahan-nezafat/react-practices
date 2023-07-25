import React from 'react';

const Counter = ({ count, increaseCount, decreaseCount }) => {
    return ( 
        <>
            <div style={{display:"flex"}}>
                <button onClick={decreaseCount}>-</button>
                <h2 style={{margin:"0"}} >Count: {count}</h2>
                <button onClick={increaseCount}>+</button>
            </div>
        </>
     );
}
 
export default Counter ; 