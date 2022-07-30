import "./ExpenseItem.css";
import React, { useState } from "react";

const ExpenseItem = (props) => {
  /// let  month = props.date.toLocaleString('en-US', {month: 'long'});
  //let year = props.date.getFullYear();
  //let Day = props.date.toLocaleString('en-US', {Day:'2-digit'});

  return (
    <div className="expense-item">
      <div className="data">{props.date}</div>

      <div className="expense-item__disc">
        <h2>{props.title}</h2>
        <div className="expense-item__price"> ${props.Amount}</div>
      </div>
    </div>
  );
};
export default ExpenseItem;
