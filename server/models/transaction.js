const mongoose = require('mongoose')

const Schema = mongoose.Schema; 

const TransactionSchema = new Schema({
        balance : { type:Number , required: true},
        total : { incomes :{ type :Number, required:true},
                expenses :{ type :Number, required:true}},
        transactions :[{
            description: { type: String },
            value : {type:Number}
        }]
})

module.exports = mongoose.model('Transactions',TransactionSchema);