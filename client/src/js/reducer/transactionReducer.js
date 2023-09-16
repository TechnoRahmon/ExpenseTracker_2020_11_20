import { ADD_Trans , DEL_Trans, GET_Trans , ERROR_Trans  } from '../actions/transactionAction';

const initialState = {
            isAdded:false, 
            error:null,
            balance : 0,
            total:{
                incomes:0,
                expense : 0,
                
                }, 
            transactions: []
        }   

const Reducer =  (state=initialState, action  )=>{
       switch(action.type){
         case GET_Trans:{
         
            const total = {incomes:0, expenses:0}
            action.payload.transactions.map(el=> {
                el.value>0?total.incomes+=el.value:total.expenses+=el.value
            })
            const balance= total.incomes+total.expenses;

            return  {
                balance:balance,
                total: total,
                transactions:action.payload.transactions,
            }         
                break;
            }

            case ERROR_Trans:{
                return  {
                    ...state , error:action.payload
                }
            }
            case ADD_Trans:{

                return  {
                    balance:action.payload.balance,
                    total: action.payload.total,
                    transactions:action.payload.transactions,
                }
              
                break;
            }

            case DEL_Trans:{
                const total = {incomes:0, expenses:0}
                action.payload.transactions.map(el=> {
                    el.value>0?total.incomes+=el.value:total.expenses+=el.value
                })
                const balance= total.incomes+total.expenses;

                return  {
                    balance:balance,
                    total: total,
                    transactions:action.payload.transactions,
                }
            }




            default:{
                return state
            }
        }

    }



export default Reducer ; 