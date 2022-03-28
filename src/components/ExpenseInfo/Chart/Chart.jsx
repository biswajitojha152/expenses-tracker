import React from 'react';
import ChartBar from './ChartBar';
import "./Chart.css";

const Chart = ({filterExpenses}) =>{
    const monthData = [
        { label: 'Jan', value: 0 },
        { label: 'Feb', value: 0 },
        { label: 'Mar', value: 0 },
        { label: 'Apr', value: 0 },
        { label: 'May', value: 0 },
        { label: 'Jun', value: 0 },
        { label: 'Jul', value: 0 },
        { label: 'Aug', value: 0 },
        { label: 'Sep', value: 0 },
        { label: 'Oct', value: 0 },
        { label: 'Nov', value: 0 },
        { label: 'Dec', value: 0 }
    ]
    for(let expense of filterExpenses){
        const monthIndex = expense.date.getMonth();
        monthData[monthIndex].value += expense.amount;
    }

    const valueArray= monthData.map(data=> data.value);
    console.log(valueArray);
    const maxVal = Math.max(...valueArray);
    return (
        <section className="chart">
           {
               monthData.map((data,index)=>{
                   return <ChartBar key={index} height={data.value} month={data.label} maxVal={maxVal}/>
               })
           }
        </section>
    );
}

export default Chart;