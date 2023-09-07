
import React ,{ useEffect } from 'react';
import { useSelector ,useDispatch } from 'react-redux';
import {getTrans} from '../actions/transactionAction';



const Display = () => {
    const dispatch = useDispatch()

  
useEffect(()=>{
       dispatch(getTrans())
},[dispatch])

    const State = useSelector(state=>{ return { balance : state.balance , total : state.total ,error : state.error}})
    return (
        <div className="com Dis">
            <h1 className="center-align red accent-3"> Expenses Tracker </h1>
            <h2 className="red accent-3">your balance is :  {State.balance} kr</h2> 
            <div className="row">

            <p className="col s6 z-depth-1 total-box exp" >Incomes : <span className="green-text text-light-2">(+){(State.total.incomes).toFixed(2)} kr</span></p>
            <p className="col s6 z-depth-1 total-box ">Expense : <span className="red-text text-accent-3">(-){Math.abs(State.total.expenses).toFixed(2)} kr</span></p>
            </div>
            <div className="row"> <h2>{State.error}</h2> </div>
        </div>
    );
}

export default Display;
