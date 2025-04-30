import React, { useState } from 'react';
import './App.css';
import Header from './components/Header.jsx';
import AddExpense from './components/AddExpense.jsx';
import ExpenseTable from './components/ExpenseTable.jsx';

const App = () => {
  const [expenses, setExpenses] = useState([
    { description: 'Tasty necessity', category: 'Food', name: 'Smocha', amount: 80, date: '2025-4-10' },
    { description: 'Kawasaki Arilines', category: 'Transport', name: 'Ninja H2R', amount: 2000000, date: '2025-4-12' },
    { description: 'Audio Heaven', category: 'Headphones', name: 'Sennheiser HE-1', amount: 100000, date: '2025-3-16' },
    { description: 'Drip pants', category: 'Clothing', name: 'Derschutze pants', amount: 10400, date: '2025-2-07' },
  ]);

  const [searchTerm, setSearchTerm] = useState('');

  const addExpense = (newExpense) => {
    setExpenses([...expenses, newExpense]);
  };

  const deleteExpense = (index) => {
    const updatedExpenses = expenses.filter((_, i) => i !== index);
    setExpenses(updatedExpenses);
  };

  const filteredExpenses = expenses.filter((expense) =>
    expense.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    expense.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
    expense.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="app">
      <Header />
      <AddExpense addExpense={addExpense} />
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search expenses..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      <ExpenseTable expenses={filteredExpenses} deleteExpense={deleteExpense} />
    </div>
  );
}

export default App;