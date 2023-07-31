import React from 'react';

const Payment = ({ bill, avg, onReset }) => {

    const total = Number(bill) + avg;

    return (
        <>
            <h3>your pay ${total} (${bill} + ${avg} Tip)</h3>
            <button onClick={onReset}>Reset</button>
        </>
    );
}
 
export default Payment;