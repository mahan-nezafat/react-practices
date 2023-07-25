import React, { useState } from 'react';
import Steps from './Steps';
import Messages from './Messages';
import Buttons from './Buttons';
import './steps.css';

const ShoppingSteps = () => {

    const [step, setStep] = useState(1)
    const [isOpen, setIsOpen] = useState(true);

    return ( 
        <>
           {isOpen && 
                <div className="steps">
                    <Steps  step={step} isOpen={isOpen} handleClose={handleClose} />
                    <Messages step={step} />
                    <Buttons handleNext={handleNext} handlePrev={handlePrev} />
                </div>
           }
        </>
    )

    function handleNext() {
        if(step < 5) {
            setStep((current) => current + 1);
        }
    }

    function handlePrev() {
        if(step > 1) {
            setStep((current) => current - 1);
        }
    }

    function handleClose() {
        setIsOpen(!isOpen);
    }
}
 
export default ShoppingSteps;