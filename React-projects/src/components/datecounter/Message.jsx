import React from 'react';

const Message = ({ count }) => {

    const date = new Date();
    date.setDate(date.getDate() + count);
    
    return ( 
        <>
            {
                count === 0 ?

                <h2>Today is {date.toDateString()}</h2>
                                
                :
                count > 0
                ?
                <h2>{count} days from today is {date.toDateString()}</h2>
                :
                <h2>{Math.abs(count)} days ago was {date.toDateString()}</h2>



            }             
        </>
     );
}
 
export default Message ;