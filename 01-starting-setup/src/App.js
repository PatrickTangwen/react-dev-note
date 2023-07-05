import ExpenseItem from "./components/ExpenseItem";
import Expenses from"./components/Expenses";
// notice that <ExpenseItem> must start with capitalized letter
function App() {
  const expenses = [
    {
      id: "e1",
      title: "Baby insurance",
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: "e2",
      title: "Car insurance",
      amount: 394.67,
      date: new Date(2022, 2, 17),
    },
    {
      id: "e3",
      title: "Home insurance",
      amount: 494.67,
      date: new Date(2023, 2, 15),
    },
  ];

  // 多加注意attribute应该在<TagName attribute></TagName>
  // 如果component tag之间没有内容需要填充，可以直接用self-closing: <ExpenseItem/>
  return (
    <div>
      <h2>Let's get started!!! </h2>
      <Expenses items = {expenses}/>

    </div>
  );
}

export default App;
