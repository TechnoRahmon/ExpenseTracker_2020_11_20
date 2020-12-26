

import { useSelector ,useDispatch } from 'react-redux';
import { deleteTrans } from '../actions/transactionAction';


const History = () => {

 
    const _ShowDeleteButton = (id)=>{
            document.getElementById(id).style.visibility = 'visible'; 
            document.getElementById(id).style.opacity = '1'; 

    }
    const _UnshowDeleteButton =(id)=>{
        document.getElementById(id).style.visibility = 'hidden'; 
        document.getElementById(id).style.opacity = '0'; 


    }
   
    // getting store from redux  , state.transactions is array
    const State = useSelector(state=>{ return state }) 
    const dispatch = useDispatch()
    //console.log('state form history :',State.transactions);

    return (
        <div className="com history" >
            <h2>History</h2>
            {/* if array is not epmty */}
            {State.transactions.length>0?State.transactions.map(item=>{
               // console.log(item);
               return (
                   
                <div className="white items" key={item._id} onMouseOver={()=>{_ShowDeleteButton(item._id)}}  onMouseLeave={()=>{_UnshowDeleteButton(item._id)}}>
                    <a className="btn-small red accent-3 deleteButton" id={item._id} onClick={()=>{dispatch(deleteTrans(item._id ,State))}}><i className="material-icons">clear</i></a>
                    <div className="item-card z-depth-3">
                    <span className="  white">{item.description}</span> {/* if I hover is button  'x' span will appear */}
                        {item.value}  Kr
                    </div>

                  
                </div>
            
          
               )} 
                ):(
                    // if array is epmty 
                <h3>there is no transactions</h3> 
            )}

    
        </div>
    );
}

export default History;
