import ExpenseItem from "./component/ExpenseItem";

function App() {
  const expenses = [
    {
      id: 'e1',
      title: 'Car Insurance', 
      amount: 294.67, 
      date: new Date(2024, 9, 16)
    },
    {
      id: 'e2',
      title: 'Toilet Paper', 
      amount: 94.12, 
      date: new Date(2024, 9, 16)
    },
    {
      id: 'e3',
      title: 'Groceries', 
      amount: 100.50, 
      date: new Date(2024, 9, 17)
    },
  ];

  return (
    <div>
      <h1>Let's get started!</h1>
      <ExpenseItem 
        title={expenses[0].title}
        amount={expenses[0].amount}
        date={expenses[0].date}
        >
      </ExpenseItem>
      <ExpenseItem 
        title={expenses[1].title}
        amount={expenses[1].amount}
        date={expenses[1].date}
        >
      </ExpenseItem>
      <ExpenseItem 
        title={expenses[2].title}
        amount={expenses[2].amount}
        date={expenses[2].date}
        > 
      </ExpenseItem>
    </div>
  );
}

export default App;