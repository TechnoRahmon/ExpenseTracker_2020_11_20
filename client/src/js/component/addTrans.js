
import React , { useState } from 'react';
import { useSelector ,useDispatch } from 'react-redux';
import {  addTrans } from '../actions/transactionAction';


const AddTrans = () => {
    
    const [job, setJob] = useState({des:'',value:''});
    const State  = useSelector(state => state)
    const _handelSubmit =(e)=>{
        e.preventDefault();
        dispatch(addTrans(job,State )) 
        setJob({des:'',value:''});
        document.getElementById('des').focus()
    }
    const dispatch = useDispatch()
    return (
        <div className="com addfield">
            <h2>Add Transaction</h2>

            <form onSubmit={_handelSubmit} className="col s12" autoComplete="off">
                <div className="row">
                    <div className="input-field col s12">
                        <input type="text" name="description" id="des" value={job.des} onChange={(e)=>{setJob({...job , des: e.target.value})}} required/>
                        <label htmlFor="des">Add details</label>
                    </div>
                </div>
               
                <div className="row">
                    <div className="input-field col s12 " >
                        <input type="number" name="value" id="value" value={job.value}  onChange={(e)=>{setJob({...job , value: e.target.value})}} required/>
                        <label htmlFor="value">Add Amount(Expenses in - and income in +)</label>
                    </div>
                </div>
                <button className="btn-large waves-effect waves-light red accent-3" type="submit" name="action">Submit
                    <i className="material-icons right">send</i>
                </button>
            </form>
            
        </div>
    );
}

export default AddTrans;
