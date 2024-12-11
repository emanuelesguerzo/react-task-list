import './App.css'
import tasks from '../data/tasks';

function App() {
  const currentTasks = tasks.filter(curTask => curTask.state === 'backlog' || curTask.state === 'in_progress');
  const completedTasks = tasks.filter(curTask => curTask.state === 'completed');
  
  return (
    <>
      <header>
        <h1>Task Manager</h1>
      </header>
      <section>
        <h2>Current Tasks ({currentTasks.length})</h2>
        <ul>
          {currentTasks.map((curTask, index) => (
            <li key={index}>
              <h3>{curTask.title}</h3>
              <p>Priority: {curTask.priority}</p>
              <p>Est. time: {curTask.estimatedTime}</p>
            </li>
          ))}
        </ul>
      </section>
      <hr />
      <section>
        <h2>Completed Tasks ({completedTasks.length})</h2>
        <ul>
          {completedTasks.map((curTask, index) => (
            <li key={index}>
              <h3>{curTask.title}</h3>
              <p>Priority: {curTask.priority}</p>
              <p>Est. time: {curTask.estimatedTime}</p>
            </li>
          ))}
        </ul>
      </section>
    </>
  )
}

export default App
