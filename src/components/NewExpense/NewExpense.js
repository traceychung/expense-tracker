import React, {useState} from 'react';
import './NewExpense.css';
import ExpenseForm from './ExpenseForm';

const NewExpense = (props) => {
    const [isEditing, setIsEditing] = useState(false);

    const startEditingHandler = () => {
        setIsEditing(true);
    }

    const stopEditingHandler = () => {
      setIsEditing(false);
    };

    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {...enteredExpenseData, id: Math.random().toString()}
        props.onAddExpense(expenseData);
        setIsEditing(false);
    }

    return (
        <div className='new-expense'>
            {!isEditing && <button onClick={startEditingHandler}>Add Expense</button>}
            {/* value for this prop is a function thats called inside the ExpenseForm component */}
            {isEditing && <ExpenseForm onCancel={stopEditingHandler} onSaveExpenseData={saveExpenseDataHandler} />}
        </div>
    )
}

export default NewExpense;
