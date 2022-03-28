import React from 'react';
import "./ChartBar.css";

const ChartBar = ({height, month, maxVal}) =>{
    let percentHeight = "0%";
    if(height !==0){
        percentHeight = `${(height/maxVal) * 100}%`;
    } 
    console.log(percentHeight);
    return (
        <section className='chart-bar'>
        <article className='chart-bar-outer'>
            <div className="chart-bar-inner" style={{height: percentHeight}}>
            </div>
        </article>
        <p>{month}</p>
        </section>
    );
}

export default ChartBar;