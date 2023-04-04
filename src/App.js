import Expenses from "./components/Expenses";

function App() {
  const expenses = [
    { title: "Car", date: new Date(2022, 12, 18), price: 5000 },
    { title: "Gym Membership", date: new Date(2021, 2, 14), price: 60 },
    { title: "Dog", date: new Date(2012, 5, 9), price: 2000 },
  ];

  return (
    <div>
      <h2>Let's get started!</h2>
      <Expenses expenses={expenses} />
    </div>
  );
}

export default App;
