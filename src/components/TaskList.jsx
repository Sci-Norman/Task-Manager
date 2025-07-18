export default function TaskList({ tasks, filter, onToggle, onDelete }) {
  const filteredTasks = tasks.filter(task => {
    if (filter === 'active') return !task.completed
    if (filter === 'completed') return task.completed
    return true
  })

  if (filteredTasks.length === 0) {
    return (
      <div className="text-center py-6 text-gray-500">
        {filter === 'all' ? 'No tasks yet!' : 
         filter === 'active' ? 'No active tasks!' : 'No completed tasks!'}
      </div>
    )
  }

  return (
    <ul className="space-y-2">
      {filteredTasks.map(task => (
        <li
          key={task.id}
          className={`p-3 border rounded flex justify-between items-center ${
            task.completed ? 'bg-gray-100 dark:bg-gray-800' : ''
          }`}
        >
          <span
            className={`flex-grow cursor-pointer ${
              task.completed ? 'line-through text-gray-500' : ''
            }`}
            onClick={() => onToggle(task.id)}
          >
            {task.text}
          </span>
          <button
            onClick={(e) => {
              e.stopPropagation()
              onDelete(task.id)
            }}
            className="ml-2 p-1 text-red-500 hover:text-red-700"
            aria-label="Delete task"
          >
            🗑️
          </button>
        </li>
      ))}
    </ul>
  )
}
