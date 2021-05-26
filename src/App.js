import React, {useState, useRef} from 'react'
import List from './List'
import Search from './Search'

const App = () => {
  const [newTodoValue, setNewTodoValue] = useState('')
  const [todoList, setTodoList] = useState([])
  const allTodos = todoList.map(todo => <p key={todo}>{todo}</p>)

  const inputRef = useRef(null)
  function addTodo(event) {
    event.preventDefault()
    setTodoList(prevList => [...prevList, newTodoValue])
    setNewTodoValue('')
    inputRef
  }
  const handleChange = event => {
    setNewTodoValue(event.target.value)
  }
  return (
    <div>
      <form>
        <input
          type="text"
          name="todo"
          value={newTodoValue}
          onChange={handleChange}
          ref={inputRef}
        />
        <button style={{margin: '40px 10px'}} onClick={addTodo}>
          Add Todo Item
        </button>
      </form>
      {allTodos}
    </div>
  )
}

export default App
