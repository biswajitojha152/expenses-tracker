import React, { useState } from "react";
import Form from "./components/Form/Form";
import ExpenseInfo from "./components/ExpenseInfo/ExpenseInfo";
import defaultData from "./data";

function App() {
  const [expenses, setExpenses] = useState(defaultData);

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
        <ExpenseInfo expenses={expenses} />
        {console.log(expenses)}
      </section>
    </main>
  );
}

export default App;
