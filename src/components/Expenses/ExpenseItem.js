import React, { useState } from "react";
import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";

function ExpenseItem(props) {
  const [title, setTitle] = useState(props.title);
  console.log("evaluated by react");

  const clickHandler = () => {
    setTitle("Updated");
    console.log(title);
  };

  return (
    <li>
      <div className="expense-item ">
        <ExpenseDate date={props.date} />
        <div className="expense-item__description ">
          <h2 className="expense-item h2">{title}</h2>
          <div className="expense-item__price">${props.amount}</div>
        </div>
        <button onClick={clickHandler}>Change Title</button>
      </div>
    </li>
  );
}

export default ExpenseItem;
