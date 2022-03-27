import React, {useState} from 'react';
import "./FilterExpense.css";

const FilterExpense = ({ expenses,setFilterExpenses, year, setYear}) =>{
    
    const handleChange = (e) =>{
        const newExpenses = expenses.filter(expense=>{
            return expense.date.getFullYear().toString() === e.target.value;
        } )
        setYear(e.target.value);
        setFilterExpenses(newExpenses);
    }
    return (
    <article className='filter-section'>
        <h4>filter by year</h4>
        <select className="select" onChange={(e)=> handleChange(e)} value={year}>
            {/* {allYears.map((year,index)=>{
                return <option key={index} value={year}>{year}</option>
            })} */}
                    <option value='2022' >2022</option>
                    <option value='2021'>2021</option>
                    <option value='2020'>2020</option>
                    <option value='2019'>2019</option>
        </select>
    </article>
    );
}

export default FilterExpense;