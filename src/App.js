import { useState, useEffect } from 'react';
import './App.css';

const Person = (props) => {
  return (
    <>
    <h1>Name: {props.name}</h1>
    <h2>Last Name: {props.lastName}</h2>
    <h2>Age: {props.age}</h2>
    </>
  )
}

const App = () => {
  const name = "Trai";
  const isNameShowing = false;
  // React Hook: React state
  const [counter, setCounter] = useState(0);
  // React Hook: React useEffect
  useEffect(() => {
    alert("You've changed the counter to: " + counter)
  }, [counter]);

  return (
    <div className="App">
      <h1>Hello, JSM! My name is {isNameShowing ? name:"John"}!</h1>
      {name ? (
        <>
          test {name}
        </>
      ): (
        <>
            <h1>Test</h1>
            <h2>Another comment</h2>
        </>
      )}
      <hr></hr>  
      <h1>Components</h1>
      <Person name="Cali" lastName="Sitanggan" age={23}/>  
      <hr></hr>
      <h1>Using React State</h1>
      <button onClick={() => setCounter((prevCount) => prevCount-1)}>-</button>
      <h1>{counter}</h1>
      <button onClick={() => setCounter((prevCount) => prevCount + 1)}>+</button>
      <hr></hr>
      <h1>Using React Hook: UseEffect</h1>
    </div>
  );
}

export default App;
