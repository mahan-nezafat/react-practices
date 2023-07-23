import React, { useEffect, useState } from 'react';

const Clock = () => {

    const [time, setTime]  =  useState(new Date().toLocaleTimeString());

    useEffect(() => {
        
       setInterval(() => {
        setTime(new Date().toLocaleTimeString());
       }, 1000)
       clearInterval();
    },[])
 

    return ( 
        <>
            <h1>Time is {time}</h1>
        </>
     );
}
 
export default Clock;