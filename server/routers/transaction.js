const Router = require('express').Router()
const controller = require('../controller/transactionController')

Router
    .route('/')
    .get(controller.getTransactions)
    .post(controller.addTransaction)

Router
    .route('/:id')
    .delete(controller.deleteTransaction)

    
module.exports = Router