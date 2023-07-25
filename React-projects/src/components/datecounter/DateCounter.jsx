import React, { useState } from 'react';
import Step from './Step';
import Counter from './Counter';
import Message from './Message';

const DateCounter = () => {

    const [step, setStep] = useState(0);
    const [count, setCount] = useState(0);

    return ( 
        <>
           <div style={{display:"flex",flexDirection: "column",width:"80%",margin:"0 auto",alignItems:"center",height:"100px",justifyContent:"space-between"}}>
                <Step step={step} increaseStep={increaseStep} decreaseStep={decreaseStep} />
                <Counter count={count} increaseCount={increaseCount} decreaseCount={decreaseCount} />
                <Message count={count} />
           </div>
        </>
     );


    function increaseStep() {
        if(step >= 0) {
            setStep((current) => current + 1);
        }
    }

    function decreaseStep() {
        if(step > 0) {
            setStep((current) => current - 1);
        }
    }

    function increaseCount() {
        setCount((current) => current + step)
    }

    function decreaseCount() {
       
        setCount((current) => current - step)
       
    }


}
 
export default DateCounter ;