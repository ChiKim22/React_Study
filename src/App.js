import { useState } from 'react';
import Header from './components/Header';
import Tasks from './components/Tasks';

function App() {
  // const [count, setCount] = useState(0)
  const [tasks, setTasks] = useState([ 
    {
        "id" : 1,
        "text" : "Doctors Appointment",
        "day" : "Feb 5th at 14:30",
        "reminder" : true
    }, 
    {
        "id" : 2,
        "text" : "Meeting at school",
        "day" : "Feb 6th at 15:30",
        "reminder" : true
    },
    {
        "id" : 3,
        "text" : "Take a test",
        "day" : "Feb 7th at 10:30",
        "reminder" : false
    }
]);

  // JSX Code

  // const increaseCount = () => {
  //   // setCount(count + 1);
  //   setCount((prev) => {return prev + 1})
  //   console.log(count);
  // }

  const onDelete = (taskId) => {
    // tasks.filter((task)=>{return task.id !== taskId})
    // setTasks(tasks.filter((task)=>task.id !== taskId));
    setTasks((prevTasks)=>prevTasks.filter((task)=>task.id !== taskId));
    console.log(tasks);
  }

  return (
    <div className="App">
      <h1>Hello from React</h1>
      <Header title="Task Tracker"/>
      <Tasks tasks={tasks} onDelete={onDelete}/>

      {/* <h3>Counter : {count}</h3>
      <button onClick={increaseCount}>+</button> */}
    </div>
  );
}

export default App;
