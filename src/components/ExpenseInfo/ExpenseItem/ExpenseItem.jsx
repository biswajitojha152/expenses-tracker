import React from 'react';
import ExpenseDate from './ExpenseDate/ExpenseDate';
import "./ExpenseItem.css";

const ExpenseItem = ({title, amount, date}) =>{
    
    return (
        <article className="card">
        <ExpenseDate date={date}/>
            <h3 className='expense-item-name'>{title}</h3>
            <div className='expense-item-price'>
            <h3>${amount}</h3>
            </div>
        </article>
    );
}

export default ExpenseItem;