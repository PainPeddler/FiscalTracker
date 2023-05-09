const User=require('./user');
const Transaction=require('./transaction');
const Entry=require('./entry');
const ExpenseCategory=require('./expense-category');
const IncomeCategory=require('./income-category');
const Budget=require('./budget')

User.hasMany(Transaction,{

    through:{
        model:Entry,
        unique:false
    },
    as:'user_transaction'
    
});

Transaction.hasMany(User,{
    through:{
        model:Entry,
        unique:false
    },
    as: 'transaction_and_users'
});

expenseCategory.belongsToMany(Budget,{
    through:{
        model:Transaction,
        unique:false
    },
    as:'expenseBudget_category'
});

incomeCategory.belongsToMany(Budget,{
    through:{
        model:Transaction,
        unique:false
    },
    as:'incomeBudget_category'
});


Budget.belongsToOne(expenseCategory,{
    through:{
        model:Transaction,
        unique:false
    },
    as: 'User_ExpenseBudget'
    
});

Budget.belongsToOne(incomeCategory,{
    through:{
        model:Transaction,
        unique:false
    },
    as: 'User_IncomeBudget'
    
});