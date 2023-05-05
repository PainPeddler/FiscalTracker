const User=require('./user');
const Transaction=require('./transaction');
const Entry=require('./entry');
const Category=require('./category');
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

Category.belongsToMany(Budget,{
    through:{
        model:Transaction,
        unique:false
    },
    as:'Budget_category'
});

Budget.belongsToOne(Category,{
    through:{
        model:Transaction,
        unique:false
    },
    as: 'User_Budget'
    
});