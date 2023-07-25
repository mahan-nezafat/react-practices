import React from 'react';

const Messages = ({ step }) => {

    const messages = [
        'register your information',
        'choose product',
        'buying product',
        'confirm your perchase',
        'your product is shipping',
    ]

    return ( 
        <>
            <span className="message">{`Step${step} : ${messages[step-1]}`}</span>
        </>
     );
}
 
export default Messages;