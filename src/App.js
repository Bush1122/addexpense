import Expenses from "./components/Expenses";

import React, { useState } from "react";
import ExpensesFoam from "./components/ExpensesFoam";

const Dummy_Expense = [
  {
    id: "e1",
    title: "School fee",
    Amount: "100",
    Data: new Date(2021, 9, 3)
  },
  {
    id: "e2",
    title: "House rent",
    Amount: "200",
    Data: new Date(2021, 2, 3)
  },
  {
    id: "e3",
    title: "Book",
    Amount: "100",
    Data: new Date(2021, 9, 3)
  },
  {
    id: "e4",
    title: " Food",
    Amount: "300",
    Data: new Date(2021, 9, 3)
  }
];

const App = () => {
  const [expenses, setExpenses] = useState(Dummy_Expense);

  const AddExpensesFoam = (expense) => {
    const updateExpenses = [expense, ...expenses];
    setExpenses(updateExpenses);
  };

  return (
    <div>
      <ExpensesFoam onAddExpenses={AddExpensesFoam} />
      <Expenses item={expenses} />
    </div>
  );
};

export default App;
