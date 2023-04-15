import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import { useState } from "react";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpenseChart";

export default function Expenses(props) {
  const [selectedYear, setSelectedYear] = useState("2020");

  const addYearHandler = (year) => {
    setSelectedYear(year);
  };

  const filteredExpenses = props.expenses.filter((expense) => {
    return expense.date.getFullYear().toString() === selectedYear;
  });


  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={selectedYear}
          onFilteredYear={addYearHandler}
        />
        <ExpensesChart expenses={filteredExpenses} />
        <ExpensesList expenses = {filteredExpenses} />
      </Card>
    </div>
  );
}
