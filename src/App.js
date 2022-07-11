import { useState } from 'react';
import Header from './components/Header';
import Tasks from './components/Tasks';

function App() {
  const [count, setCount] = useState(0)

  // JSX Code

  const increaseCount = () => {
    // setCount(count + 1);
    setCount((prev) => {return prev + 1})
    console.log(count);
  }

  return (
    <div className="App">
      <h1>Hello from React</h1>
      <Header title="Task Tracker"/>
      <Tasks/>

      <h3>Counter : {count}</h3>
      <button onClick={increaseCount}>+</button>
    </div>
  );
}

export default App;
