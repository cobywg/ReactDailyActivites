import Header from './components/Header'
import DailyTasks from './components/DailyTasks'
import { useState } from 'react'
function App() {
  const [tasks, setTasks] = useState ([
    {
        id: 1,
        text: 'Huberman Task 1',
        day: 'Today',
        reminder: true,
    },
    {
        id: 2,
        text: 'Huberman Task 3',
        day: 'Today 2',
        reminder: true,
    },
    {
        id: 3,
        text: 'Huberman Task 3',
        day: 'Today 3',
        reminder: true,
    },
    ])
  return (
    <div className="container">
      <Header/>
      <DailyTasks tasks = {tasks}/>
    </div>
  );
}




export default App;
