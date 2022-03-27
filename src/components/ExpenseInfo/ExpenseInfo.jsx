import React, {useState} from 'react';
import FilterExpense from "./FilterExpense/FilterExpense";

import ExpenseItem  from './ExpenseItem/ExpenseItem';

import "./ExpenseInfo.css";

const ExpenseInfo = ({ expenses}) =>{
     const [year, setYear] = useState("2021");
     const [filterExpenses, setFilterExpenses] = useState(
    expenses.filter((expense) => expense.date.getFullYear().toString() === year)
  );    

    return (
    <section className='expense-info'>
        <FilterExpense expenses={expenses} setFilterExpenses={setFilterExpenses} year={year} setYear={setYear}/>
        {
           filterExpenses.length === 0 ? <div className="no-info"><h3>no expenses found</h3></div> :  filterExpenses.map(expense=>{
                return <ExpenseItem key={expense.id} {...expense}/>
            })
        }
    </section>
    );
}

export default ExpenseInfo;