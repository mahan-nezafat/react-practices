import React, { useEffect, useState } from 'react';

const CurrencyConverter = () => {
    const URL = "https://api.frankfurter.app/latest"

    const [currencyAmount, setCurrencyAmount] = useState("1");
    const [fromCurrency, setFromCurrency] = useState("USD");
    const [toCurrency, setToCurrency] = useState("EUR");
    const [calculatedAmount, setCalculatedAmount] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        async function fetchCurrency() {
           try {
            setIsLoading(true);
            const response = await fetch(`${URL}?amount=${currencyAmount}&from=${fromCurrency}&to=${toCurrency}`);
            const data = await response.json();
            setCalculatedAmount(data.rates[toCurrency]);
            setIsLoading(false);
        } catch (error) {
            console.log(error);
        }
    }
        if(toCurrency === fromCurrency) return setCalculatedAmount(currencyAmount)
        fetchCurrency();
    },[currencyAmount,fromCurrency,toCurrency])

    return ( 
        <>
            <div>
                <input type="number" value={currencyAmount} onChange={(e) => setCurrencyAmount(e.target.value)} />
                <select value={fromCurrency} onChange={(e) => setFromCurrency(e.target.value)} disabled={isLoading} >
                    <option value="USD">USD</option>
                    <option value="EUR">EUR</option>
                    <option value="CAD">CAD</option>
                    <option value="JPY">JPY</option>
                </select>
                <select value={toCurrency} onChange={(e) => setToCurrency(e.target.value)} disabled={isLoading} >
                    <option value="USD">USD</option>
                    <option value="EUR">EUR</option>
                    <option value="CAD">CAD</option>
                    <option value="JPY">JPY</option>
                </select>
            </div>
            <h2>{calculatedAmount} {toCurrency}</h2>
        </>
    );
}
 
export default CurrencyConverter;