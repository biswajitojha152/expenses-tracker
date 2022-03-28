import React, {useState} from 'react';
import "./Form.css";
const Form = ({ setExpenses}) =>{
     const [text, setText] = useState({
        title: '',
        amount: '',
        date: ''
     });
     const {title, amount, date} = text;

     const handleChange = (e) =>{
        const name = e.target.name;
        setText({
            ...text,
            [name]: e.target.value
        })
     }

     const handleSubmit = (e) =>{
        e.preventDefault();
        if(title === "" || amount === "" || date === ""){
            return;
        }
        setExpenses((preVal)=> [...preVal, {id: new Date().getTime().toString(), ...text, date: new Date(text.date)}]);
        setText(
            {
                title: "",
                amount: "",
                date: ""
            }
        )
     }
    return (
        <form className="form" onSubmit={handleSubmit}>
            <div className="form-control">
                <label htmlFor="title">title</label>
                <input type="text" id='title' name='title' value={title} onChange={(e)=>handleChange(e)}/>
            </div>
            <div className="form-control">
                <label htmlFor="amount">amount</label>
                <input type="number" id='amount' name='amount' min="0" step="0.01" value={amount} onChange={(e)=> handleChange(e)}/>
            </div>
            <div className="form-control">
                <label htmlFor="date">date</label>
                <input type="date" id='date' min="2019-01-01" max="2022-12-31"  name='date' value={date} onChange={(e)=>handleChange(e)}/>
            </div>
            <button type="submit">add expense</button>
        </form>
    )
}

export default Form;