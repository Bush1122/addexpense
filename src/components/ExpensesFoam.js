import "./ExpensesFoam.css";
import React from "react";
import ExpensesFoam2 from "./ExpensesFoam2";

const ExpensesFoam = (props) => {
  const savechangeHandle = (Enterexpensedata) => {
    const expenseDate = {
      ...Enterexpensedata,
      id: Math.random().toString()
    };

    props.onAddExpenses(expenseDate);

    console.log(expenseDate);
  };
  return (
    <div className="new-expense">
      <ExpensesFoam2 onsavechangeHandle={savechangeHandle} />
    </div>
  );
};

export default ExpensesFoam;
