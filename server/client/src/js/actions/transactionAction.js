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
            const newData = { newTransaction: newTrans , total: newTotal , balance:(newTotal.incomes + newTotal.expenses)}

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
                    const data = resp.data?.data ?? [];
                    dispatch({ type:GET_Trans , payload:data })
                })
                .catch(err=>{
                    const errorMessage = err?.message ? err.message : err;
                    dispatch({ type:ERROR_Trans, payload:errorMessage})
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
                dispatch({ type:ERROR_Trans, payload:err})
            })
        }
}