import React, { useState } from "react";

import "./ExpensesFoam2.css";

const ExpensesFoam2 = (props) => {
  const [enterTitle, setEnterTitle] = useState("");
  const TitleChangeHandler = (even) => {
    setEnterTitle(even.target.value);
  };

  const [enterAmount, setEnterAmount] = useState("");
  const AmountChangeHandler = (even) => {
    setEnterAmount(even.target.value);
  };
  const [enterDate, setEnterDate] = useState("");
  const DateChangeHandler = (even) => {
    setEnterDate(even.target.value);
  };

  const SubmitHandle = (event) => {
    event.preventDefault();
    const expenseData = {
      Amount: enterAmount,
      data: new Date(enterDate),
      title: enterTitle
    };
    props.onsavechangeHandle(expenseData);

    console.log(expenseData);

    setEnterTitle("");
    setEnterAmount("");
    setEnterDate("");
  };

  return (
    <form onSubmit={SubmitHandle}>
      <div className="new-expenses__controls">
        <div className="new-expenses__control ">
          <label>Title</label>
          <input type="text" value={enterTitle} onChange={TitleChangeHandler} />
        </div>
        <div className="new-expenses__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={enterAmount}
            onChange={AmountChangeHandler}
          />
        </div>
        <div className="new-expenses__control">
          <label>Date</label>
          <input type="date" value={enterDate} onChange={DateChangeHandler} />
        </div>
      </div>
      <div className="new-expenses__actions">
        <button type="submit" value="Submit">
          Add expenses
        </button>
      </div>
    </form>
  );
};
export default ExpensesFoam2;
