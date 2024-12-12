import './App.css'
import tasks from './data/tasks';

function App() {
  const currentTasks = tasks.filter(curTask => curTask.state !== 'completed');
  const completedTasks = tasks.filter(curTask => curTask.state === 'completed');
  
  const printList = (array) => {
    return array.map((curTask) => (
      <li key={curTask.id}>
          <h3>{curTask.title}</h3>
          <span className={`tag state-${curTask.state.replace('_', '-')}`}>
            {curTask.state}
          </span>
          <p>Priority: {curTask.priority}</p>
          <p>Est. time: {curTask.estimatedTime}</p>
      </li>
    ))
  }

  return (
    <>
      <header>
        <h1>Task Manager</h1>
      </header>

      <main>
        <section>
          <h2>Current Tasks ({currentTasks.length})</h2>
          <ul>
            {printList(currentTasks)}
          </ul>
        </section>

        <hr />

        <section>
          <h2>Completed Tasks ({completedTasks.length})</h2>
          <ul>
            {printList(completedTasks)}
          </ul>
        </section>
      </main>
    </>
  )
};

export default App;
