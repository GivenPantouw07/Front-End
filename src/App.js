import Hello from "./components/Hello";
import Users from "./components/Users";
import World from "./components/World";
import {useState} from 'react'

const App = () => {
  // let hello = "Hello World";
  const [hello, setHello] = useState("Selamat Datang"); //Nilai default

  const handleClick = () => {
    // hello = "Welcome";
    setHello ("Welcome")
    console.log(hello)
  };

  return (
    /*JSX*/
    <div>
      <h1>{hello}</h1>
      <h2>Hello React</h2>
      <Hello text="Hello 1" number ={20}/>
      <Hello text="Hello 2" number ={30}/>
      <World />
      <Users />
      <button onClick={handleClick}>Click Me</button>
    </div>
  );
};

export default App;
