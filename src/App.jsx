import { useState } from "react";
import Header from "./Header";
import Expensedisplay from "./Expensedisplay";
import Addexpense from "./Addexpense";

function App() {
  const [expenses, setExpenses] = useState([]);

  const addExpense = (expense) => {
    setExpenses([...expenses, expense]);
  };

  return (
    <div>
      <Header />
      <div className="flex gap-10 px-10">
        <div className="w-1/3">
          <Expensedisplay onAddExpense={addExpense} />
        </div>
        <div className="w-2/3">
          <Addexpense expenses={expenses} />
        </div>
      </div>
    </div>
  );
}

export default App;
