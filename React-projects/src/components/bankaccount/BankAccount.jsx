import React, { useReducer } from 'react';

const BankAccount = () => {

    const initialState = {
        balance: 0,
        loan: 0,
        isAccountOpen: false,
        isLoan: false
    }

    function reducer(state, action) {
        switch (action.type) {
            case "OpenAccount":
                return {
                    ...state,
                    balance: state.balance + 500,
                    isAccountOpen: true,
                    
                }

            case "Deposit": 
                return {
                    ...state,
                    balance: state.balance + action.payload
                }    

            case "Withdraw":
                return {
                    ...state,
                    balance: state.balance - action.payload
                }    

            case "RequestLoan":
                return {
                    ...state,
                    loan: state.loan + action.payload,
                    isLoan: true
                }    

            case "ResetLoan":
                return {
                    ...state,
                    loan: 0,
                    isLoan: false
                } 
                
            case "CloseAccount": 
                return {
                    ...state,
                    isAccountOpen: false,
                    isLoan: false
                }    
        
            default:
                throw Error("action not founded");
        }
    }


    const [state, dispatch] = useReducer(reducer, initialState);


    return (
        <>
            <h1>Bank Account</h1>        

            <h3>Balance: {state.balance}</h3>

            <h3>Loan: {state.loan}</h3>

            <button disabled={state.isAccountOpen ? true : false} onClick={() => dispatch({type: "OpenAccount"})}>Open Account</button>

            <button disabled={!state.isAccountOpen} onClick={() => dispatch({type: "Deposit", payload: 150})}>Deposit 150</button>

            <button disabled={!state.isAccountOpen} onClick={() => dispatch({type: "Withdraw", payload: 50})}>Withdraw 50</button>
            
            <button disabled={!state.isAccountOpen || state.isLoan ? true : false} onClick={() => dispatch({type: "RequestLoan", payload: 5000})}>Request a loan of 5000</button>

            <button disabled={!state.isAccountOpen} onClick={() => dispatch({type: "ResetLoan"})}>Pay loan</button>

            <button disabled={state.loan === 0 && state.balance === 0 ? false : true ? state.isAccountOpen : false} onClick={() => dispatch({type: "CloseAccount"})}>Close Account</button>
        </>
    );
}
 
export default BankAccount;