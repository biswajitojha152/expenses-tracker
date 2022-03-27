import React from 'react';
import "./ExpenseDate.css";

const ExpenseDate = ({date}) =>{
     const month = date.toLocaleString('BR', { month: 'long' });
    const day = date.toLocaleString('en-US', { day: '2-digit' });
    const year = date.getFullYear();
    return (
        <div className='expense-item-time'>
            <h4 className='month'>{month}</h4>
            <h5 className='year'>{year}</h5>
            <h3 className='day'>{day}</h3>
        </div>
    );
}

export default ExpenseDate;