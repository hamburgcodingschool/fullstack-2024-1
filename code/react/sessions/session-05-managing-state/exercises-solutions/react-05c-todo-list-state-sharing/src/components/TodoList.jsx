import TodoItem from './TodoItem';

export default function TodoList({ todos, updateTodo, deleteTodo }) {
  return (
    <ul>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          updateTodo={updateTodo}
          deleteTodo={deleteTodo}
        />
      ))}
    </ul>
  );
}
