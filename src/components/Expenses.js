import "./Expenses.css";
import React from "react";
import ExpenseItem from "./ExpenseItem";

const Eexpenses = (props) => {
  return (
    <div className="expenses_item">
      {props.item.map((expense) => (
        <ExpenseItem
          data={expense.data}
          title={expense.title}
          amount={expense.amount}
        />
      ))}
    </div>
  );
};
export default Eexpenses;
