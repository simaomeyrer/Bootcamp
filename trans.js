const user = {
    name: 'Mariana',
    transactions: [],
    balance: 0
}

const makeTransactions = [
    goodTransaction = {
        type: 'credit',
        value: 50.5
    },
    poorTransaction = {
        type: 'debit',
        value: 10
    }
]

function createTransaction(trans) {
    if (makeTransactions[0].type === 'credit') {
        user.balance = user.balance + makeTransactions[0].value,
            user.transactions.push(makeTransactions[0])
    } else {
        user.balance = user.balance - makeTransactions[1].value,
            user.transactions.push(makeTransactions[1])

    }
    
}

createTransaction(makeTransactions);
createTransaction(makeTransactions);

