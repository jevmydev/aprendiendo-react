import { type TodoId, type ListOfTodos, type Todo as TodoTypes } from "../types";

import Todo from "./Todo";

interface Props {
    todos: ListOfTodos;
    onRemoveTodo: ({ id }: TodoId) => void;
    onToggleCompleteTodo: ({ id, completed }: Pick<TodoTypes, "id" | "completed">) => void;
}

export const Todos: React.FC<Props> = ({ todos, onRemoveTodo, onToggleCompleteTodo }) => {
    return (
        <ul className="todo-list">
            {todos.map((todo) => (
                <li key={todo.id} className={`${todo.completed ? "completed" : undefined}`}>
                    <Todo
                        key={todo.id}
                        id={todo.id}
                        title={todo.title}
                        completed={todo.completed}
                        onRemoveTodo={onRemoveTodo}
                        onToggleCompleteTodo={onToggleCompleteTodo}
                    />
                </li>
            ))}
        </ul>
    );
};

export default Todos;
