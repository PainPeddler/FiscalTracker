//John's placeholder functions for database math

const ExpenseCategory = require("./expense-category");
const IncomeCategory = require("./income-category");
//when user selects "daily"

//GET all database
function DailyRate(){
    let totalIncome = 0; // this will be incremented
    let totalExpenses = 0; //this will be incremented

    //get daily rate from weekly costs
    //Note: need to use for of loops!!!!
    for (let i=0; i < ExpenseCategory.length; i++) {
        if (ExpenseCategory(i).rate = 'Daily'){
            totalExpenses += ExpenseCategory.amount;
        }
        else if (ExpenseCategory(i).rate = 'Monthly'){
            totalExpenses += ExpenseCategory.amount/30;
        }
        else if (ExpenseCategory(i).rate = 'Annual'){
            totalExpenses += ExpenseCategory.amount/365;
        }

    for(let i=0; i < IncomeCategory.length; i++) {
        if (IncomeCategory(i).rate = 'Daily'){
            totalIncome += IncomeCategory.amount;
        }
        else if (IncomeCategory(i).rate = 'Monthly'){
            totalIncome += IncomeCategory.amount/30;
        }
        else if (IncomeCategory(i).rate = 'Annual'){
            totalIncome += IncomeCategory.amount/365;
        }
    }

    return totalExpenses, totalIncome, totalIncome-totalExpenses;

    }