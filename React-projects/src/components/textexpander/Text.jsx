import React, { useState } from 'react';

const Text = ({ color, openText, closeText, slicewords, expandState, textInput, backGroundColor }) => {

    let text = textInput;
    const [isOpen, setIsOpen] = useState(expandState);

    return ( 
        <>
            <div style={{backgroundColor: backGroundColor}}>
                <p>{isOpen ? text : text.slice(0,slicewords) + "..."
                    
                    }<span style={{color: color,cursor: "pointer"}} onClick={() => setIsOpen(isOpen => !isOpen)}>{isOpen ? openText : closeText }</span></p>
            </div>
        </>
     );
}
 
export default Text;