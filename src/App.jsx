// import viteLogo from '/vite.svg'
// import './App.css';
// import DataComponent from "./Components/DataComponent";
import ListItem from "./components/ListItem";


function App() {

  const items = [
    {name: 'Chimezie', age: 41},
    {name:  'Uchechi',  age:38},
    {name:  'Dubem',    age:11},
  ];
  const listItems = items.map(({name, age},i) => (<ListItem key={i} name={name} age={age} />));

  console.log(listItems);


  return (
   <ul>
    <button onClick={listItems}>Button 1</button>
    <button onClick={() => listItems(items)}>Button 1</button>
 </ul>
  );
}

export default App;
