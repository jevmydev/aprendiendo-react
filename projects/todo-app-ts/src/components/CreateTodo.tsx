import { useState } from "react";
import { TodoTitle } from "../types";

interface Props {
    saveTodo: ({ title }: TodoTitle) => void;
}

export const CreateTodo: React.FC<Props> = ({ saveTodo }) => {
    const [inputValue, setInputValue] = useState("");

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        saveTodo({ title: inputValue });
        setInputValue("");
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => setInputValue(e.target.value);

    return (
        <form onSubmit={handleSubmit}>
            <input className="new-todo" type="text" value={inputValue} onChange={handleChange} placeholder="¿Qué quieres hacer?" autoFocus />;
        </form>
    );
};

export default CreateTodo;
