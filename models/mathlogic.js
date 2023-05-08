//John's placeholder functions for database math

//when user selects "daily"

//GET all database
function Daily(){
    let totalIncome = 0; // this will be incremented
    let totalExpenses = 0; //this will be incremented

    //get daily rate from weekly costs
    //Note: need to use for of loops!!!!
    //let weeklyArray = []; call database entries with "weekly" time ID
    for (let i=0; i < length; i++) {
        if (weeklyArray[i] = 'Expense'){
            totalExpenses += weeklyArray.amount/7;
        }
        else if (weeklyArray[i] = 'Income'){
            totalIncome = weeklyArray.amount/7;
        }

    }
    //let annualArray = []; call database entries with "annual" time ID
    //get daily rate from annual costs
    for (let i=0; i < length; i++) {
        if (weeklyArray.id = 'Expense'){
            weeklyExpenses[j] = weeklyArray.amount/365;
            j++;
        }
        else if (weeklyArray.id = 'Income'){
            weeklyIncome[k] = weeklyArray.amount/365;
        } 
    }

}

//For length (categories)database