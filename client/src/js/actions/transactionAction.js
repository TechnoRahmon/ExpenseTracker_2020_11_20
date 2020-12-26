import axios from 'axios';
export const ADD_Trans = 'ADD_TRANSACTION'; 
export const DEL_Trans = 'DELETE_TRANSACTION'; 
export const GET_Trans = 'GET_TRANSACTION'; 
export const ERROR_Trans = 'ERROR_TRANSACTION'


export const addTrans = (Val,data)=>{
        return (dispatch)=>{
            const newTrans = { description :Val.des ,value : Number(Val.value) };
            const newTotal = Val.value > 0 ?
                    { ...data.total, incomes : data.total.incomes +  Number(Val.value)}
                    :{ ...data.total, expenses : data.total.expenses + Number(Val.value)};
                   // console.log(newTotal)
            const newData = { newTransaction: newTrans , total: newTotal , balance:(newTotal.incomes + newTotal.expenses)}
            //console.log(newData)

            const config= { headers:{accept :'application/json'}, data:{}}
            axios.post('/api/transaction',newData,config)
                .then(resp=>{
                    dispatch({ type:ADD_Trans , payload: resp.data.data})
                })
                .catch(err=>{
                    dispatch({ type:ERROR_Trans, payload:err})
                })
        }
}


export const getTrans = ()=>{
    return (dispatch)=>{
            axios.get('/api/transaction')
                .then(resp=>{
                    ///console.log(resp.data);
                    dispatch({ type:GET_Trans , payload: resp.data.data})
                })
                .catch(err=>{
                    console.log(err);
                    dispatch({ type:ERROR_Trans, payload:err})
                })

        }

 
    
}


export const deleteTrans = (id, state)=>{
        return(dispatch)=>{
            axios.delete('/api/transaction/'+id)
            .then(resp=>{
                dispatch({ type:DEL_Trans , payload: resp.data.data})
            })
            .catch(err=>{
                console.log(err);
                dispatch({ type:ERROR_Trans, payload:err})
            })
        }
}



// let index = 0;
// const newTransactions = state.transactions.filter((tran)=> tran.id !== id)
// console.log(newTransactions)
// //newTransactions.map((el)=>{return el.id = ++index})
// let deletedItem = state.transactions[id]
// const newTotal = deletedItem.value > 0 ?
//         { ...state.total, inc : state.total.inc - deletedItem.value}
//         :{ ...state.total, exp : state.total.exp - deletedItem.value};
    
//newTransactions[deletedItem.id-1]? newTransactions[deletedItem.id-1].id =deletedItem.id:console.log(newTransactions);


// return {...state , transactions:[...newTrans ] , total: newTotal , balance: CalculateBalance(newTotal)}
// break;

// type: DEL_Trans,
// payload:{
//     id: id
// }