import React, { useState } from 'react';
import Bill from './Bill';
import Services from './Services';
import Payment from './Payment';

const TipCalculator = () => {

    const [bill, setBill] = useState(0);

    const [selectValue1, setSelectValue1] = useState(0);
    const [selectValue2, setSelectValue2] = useState(0);

   
    const avg = Number(bill) * ((Number(selectValue1) + Number(selectValue2)) / 2 / 100);

    console.log(typeof bill)

    function handleReset() {
        setBill(0);
        setSelectValue1(0);
        setSelectValue2(0);
    }

    return ( 
        <>
          
            <Bill bill={bill} setBill={setBill}/>
            <Services selectValue1={selectValue1} setSelectValue1={setSelectValue1} selectValue2={selectValue2} setSelectValue2={setSelectValue2} />
            <Payment bill={bill} avg={avg} onReset={handleReset}/>
        </>
     );
}
 
export default TipCalculator;