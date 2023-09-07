const transaction = require('../models/transaction')

// initialBudget 
const initialBudget = async ()=>{
    Budget = await transaction.find()
    if (Budget.length==0){
        try{
            const newBudget = new transaction()
            newBudget.balance = 0;
            newBudget.total.incomes =0 ;
            newBudget.total.expenses = 0;
            newBudget.save()
            return newBudget._id
        }catch(err){
            console.log('therer is error ' , err);
            return (err)
        }       
    }else{
        return Budget[0]._id 
    }
}


//@route /api/transaction
//@des GET ALL TRANSACTIONS 
//@access Public 
exports.getTransactions = async (req,res,next)=>{

        try{
            initialBudget()
            const Budget = await transaction.find(); 
            if(!Budget.length) return res.status(404).json({ success:false, error: 'NO data Found'})
            return res.status(200).json({ success:true , data:Budget[0] })
        }
        catch(err){
            return res.status(500).json({success:false , error:'Server Error'})
        }
}


//@route /api/transaction
//@des POST new TRANSACTION
//@access Public 
exports.addTransaction = async (req,res,next)=>{

    try{

       const id =  await  initialBudget()
        const { balance , total , newTransaction } = req.body
        if (!balance && !total & !newTransaction ){
            return res.status(400).json({success:false , error :`data should not be emptey`})
        }
        const updateBudget =await transaction.findById(id)
         //console.log(updateBudget);
         await updateBudget.updateOne( {     
             balance : balance, 
            "total.incomes" : total.incomes,
            "total.expenses" : total.expenses,
            transactions:[...updateBudget.transactions ,{ 
                             description:newTransaction.description,
                                value:newTransaction.value
                            }]
            },async (err)=>{
                if(err && err.name == 'ValidationError'){
                    const message = Object.values(err.errors).map(msg => msg.message)
                    return res.status(400).json({ success:false, error:message })}
                    const Budget = await transaction.find();
                    return res.status(200).json({ success:true , data:Budget[0] }) 
            })
     }
    catch(err){
        return res.status(500).json({success:false , error:'Server Error -'+err})
            }
}


//@route /api/transaction/:id
//@des delete a TRANSACTION 
//@access Public 
exports.deleteTransaction = async (req,res,next)=>{

        try{
            const id =await initialBudget()
            const item_id = req.params.id
            await transaction.findOneAndUpdate({_id : id},{
                $pull :{ transactions:{_id:item_id}}
            },async (err)=>{
                if (err) return res.status(404).json({success : false , error :'Transaction is not found'+err})
                const Budget = await transaction.find();
                return res.status(200).json({ success:true, data:Budget[0]})
            })
        }
        catch(err){
            res.status(500).json({success:false, error:"Server Error"})
        }
}