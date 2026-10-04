function calculateTotal(expenses){
    let total = 0;
    for(let i = 0; i < expenses.length; i++){
        total += expenses[i].amount;
    }
    return total;
}

function calculateCategoryTotal(expenses, category){
    let total = 0;
    for(let i = 0; i < expenses.length; i++){
        if(expenses[i].category === category){
            total += expenses[i].amount;
        }
    }
    return total;
}

function findLargestExpense(expenses){
    let largest = expenses[0];
    for(let i = 1; i < expenses.length; i++){
        if(expenses[i].amount > largest.amount){
            largest = expenses[i];
        }
    }
    return largest;
}

function createExpenseSummary(expenses){
    const total = calculateTotal(expenses);
    const foodTotal = calculateCategoryTotal(expenses, 'food');
    const transportTotal = calculateCategoryTotal(expenses, 'transport');
    const booksTotal = calculateCategoryTotal(expenses, 'books');
    const largestExpense = findLargestExpense(expenses);

    return {
        total: total,
        foodTotal: foodTotal,
        transportTotal: transportTotal,
        booksTotal: booksTotal,
        largestExpense: largestExpense
    };
}

const expenses = [
  { id: 1, category: 'food', amount: 24 },
  { id: 2, category: 'transport', amount: 15 },
  { id: 3, category: 'food', amount: 18 },
  { id: 4, category: 'books', amount: 40 },
];

console.log(createExpenseSummary(expenses));
console.log(calculateCategoryTotal(expenses, 'food'));
console.log(calculateCategoryTotal(expenses, 'health'));
console.log(findLargestExpense(expenses));