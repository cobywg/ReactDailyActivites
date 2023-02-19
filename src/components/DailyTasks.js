



export const DailyTasks = ({tasks}) => {

  return (
    <>
    {tasks.map((task) => (
    <h3 key = {task.id}>{tasks.text}</h3>
    ))}
    </>
  )
}

export default DailyTasks
