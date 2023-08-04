import React from 'react';
import Text from './Text';
const TextExpander = () => {

    let text = "Working out in the gym is an invigorating experience that pushes you to challenge your limits, both physically and mentally. With each rep and set, you're on a journey of self-improvement, building strength, endurance, and resilience."
    return ( 
        <>
            <Text color="blue" openText="Show less" closeText="Show more" slicewords={100} expandState={false} textInput={text}/>
            <Text color="red" openText="Collapse text" closeText="Show text" slicewords={200} expandState={false} textInput={text}/>
            <Text backGroundColor="gray" color="blue" openText="Show less" closeText="Show more" slicewords={100} expandState={true} textInput={text}/>

        </>
    );
}
 
export default TextExpander;