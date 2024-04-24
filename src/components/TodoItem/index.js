// Write your code here
import './index.css'

const TodoItem = props => {
  const {todo, deleteTodo} = props
  const {id, title} = todo
  const ondeleteTodo = () => {
    deleteTodo(id)
  }

  return (
    <li className="todo">
      <p className="title">{title}</p>
      <button className="button" type="button" onClick={ondeleteTodo}>
        Delete
      </button>
    </li>
  )
}

export default TodoItem
