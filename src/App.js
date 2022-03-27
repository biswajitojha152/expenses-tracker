import React, { useState } from "react";
import Form from "./components/Form/Form";
import ExpenseInfo from "./components/ExpenseInfo/ExpenseInfo";
import defaultData from "./data";

function App() {
  const [expenses, setExpenses] = useState(defaultData);
  const [year, setYear] = useState("2021");
  const [filterExpenses, setFilterExpenses] = useState(
    expenses.filter((expense) => expense.date.getFullYear().toString() === year)
  );
  console.log(expenses);
  return (
    <main>
      <section className="section">
        <div className="title">
          <h2>
            <span>kumar's</span> expense tracker
          </h2>
          <div className="underline"></div>
        </div>
        <Form setExpenses={setExpenses} />
        <ExpenseInfo
          expenses={expenses}
          filterExpenses={filterExpenses}
          setFilterExpenses={setFilterExpenses}
          year={year}
          setYear={setYear}
        />
        {console.log(expenses)}
      </section>
    </main>
  );
}

export default App;
