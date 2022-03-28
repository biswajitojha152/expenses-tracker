import React, {useState, useEffect} from 'react';
import FilterExpense from "./FilterExpense/FilterExpense";

import ExpenseItem  from './ExpenseItem/ExpenseItem';
import Chart from './Chart/Chart';

import "./ExpenseInfo.css";

const ExpenseInfo = ({ expenses}) =>{
     const [year, setYear] = useState("2021");
     const [filterExpenses, setFilterExpenses] = useState(
    expenses.filter((expense) => expense.date.getFullYear().toString() === year)
  );    
    useEffect(()=>{
        setFilterExpenses( expenses.filter((expense) => expense.date.getFullYear().toString() === year))
    }, [expenses]);
    return (
    <section className='expense-info'>
        <FilterExpense expenses={expenses} setFilterExpenses={setFilterExpenses} year={year} setYear={setYear}/>
        <Chart filterExpenses={filterExpenses}/>
        {
           filterExpenses.length === 0 ? <div className="no-info"><h3>no expenses found</h3></div> :  filterExpenses.map(expense=>{
                return <ExpenseItem key={expense.id} {...expense}/>
            })
        }
    </section>
    );
}

export default ExpenseInfo;