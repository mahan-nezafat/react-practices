import React from 'react';
import Steps from './Steps';
import Messages from './Messages';
import Buttons from './Buttons';
import 'steps.css';

const ShoppingSteps = () => {
    return ( 
        <>
            <Steps />
            <Messages />
            <Buttons />
        </>
     );
}
 
export default ShoppingSteps;