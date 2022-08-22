import React, {useState}from 'react';
import NewExpense from './components/NewExpense/NewExpense';
import Expenses from "./components/Expenses/Expenses";

let DUMMY_EXPENSE = [
  /*{
    id:'e1',
    title: 'School fee',
    amount:250,
    date: new Date(2022, 5, 12)
  },

  {
    id:'e2',
    title: 'House Rent',
    amount:550,
    date: new Date(2022, 5, 10)
  },

  {
    id:'e3',
    title: 'Bike Service',
    amount:350,
    date: new Date(2022, 5, 15)
  },

  {
    id:'e4',
    title: 'Food',
    amount:400,
    date: new Date(2022, 5, 20)
  }*/

];


const App = (props)=> {

 const [expenses, setExpenses] = useState(DUMMY_EXPENSE);


 const addExpenseHandler = (expense)=>{
  const updatedExpense = [expense, ...expenses];
  setExpenses(updatedExpense);
}

  return (
       <div>
      <NewExpense onAddExpense = {addExpenseHandler}/>   
      <Expenses item =  {expenses}/> 
    </div>
  );
}
export default App;
