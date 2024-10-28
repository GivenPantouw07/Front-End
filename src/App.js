import Hello from "./components/Hello";
import World from "./components/World";

const App = () => {
  const hello = "Hello World";
  return (
    /*JSX*/
    <div>
      <h1>{hello}</h1>
      <h2>Hello React</h2>
      <Hello />
      <World />
    </div>
  );
};

export default App;
