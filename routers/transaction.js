const Router = require("express").Router();
const controller = require("../controller/transactionController");

/**
 * @swagger
 * tags:
 *   name: Transactions
 *   description: API endpoints for managing transactions
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     Transaction:
 *       type: object
 *       properties:
 *         balance:
 *           type: number
 *           description: The current balance.
 *         total:
 *           type: object
 *           properties:
 *             incomes:
 *               type: number
 *               description: Total income.
 *             expenses:
 *               type: number
 *               description: Total expenses.
 *           description: Object containing total income and expenses.
 *         transactions:
 *           type: array
 *           items:
 *             type: object
 *             properties:
 *               description:
 *                 type: string
 *                 description: Transaction description.
 *               value:
 *                 type: number
 *                 description: Transaction value.
 *           description: Array of transactions.
 */

/**
 * @swagger
 * /api/transaction:
 *   get:
 *     summary: Get all transactions
 *     tags: [Transactions]
 *     responses:
 *       200:
 *         description: Returns a list of all transactions
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Transaction'
 *       500:
 *         description: Internal server error
 *   post:
*     summary: Add a new transaction
 *     tags: [Transactions]
 *     requestBody:
 *       description: Transaction data
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               newTransaction:
 *                 type: object
 *                 properties:
 *                   description:
 *                     type: string
 *                     description: Transaction description.
 *                   value:
 *                     type: number
 *                     description: Transaction value.
 *                 required:
 *                   - description
 *                   - value
 *               total:
 *                 type: object
 *                 properties:
 *                   incomes:
 *                     type: number
 *                     description: Total income.
 *                   expenses:
 *                     type: number
 *                     description: Total expenses.
 *                 required:
 *                   - incomes
 *                   - expenses
 *               balance:
 *                 type: number
 *                 description: Current balance (incomes + expenses).
 *             required:
 *               - newTransaction
 *               - total
 *               - balance
 *     responses:
 *       201:
 *         description: Successfully added a new transaction
 *       400:
 *         description: Bad request, invalid data
 *       500:
 *         description: Internal server error
 */
Router.route("/")
  .get(controller.getTransactions)
  .post(controller.addTransaction);

/**
 * @swagger
 * /api/transaction/{id}:
 *   delete:
 *     summary: Delete a transaction by ID
 *     tags: [Transactions]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the transaction to delete (as a string)
 *         schema:
 *           type: string
 *     responses:
 *       204:
 *         description: Transaction deleted successfully
 *       404:
 *         description: Transaction not found
 *       500:
 *         description: Internal server error
 */
Router.route("/:id").delete(controller.deleteTransaction);


module.exports = Router;
