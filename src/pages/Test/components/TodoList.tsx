import { ChangeEvent, useEffect, useState } from "react";
import axios from "axios";

type TodoItem = {
    id: number;
    text: string;
};

const TodoList = (): JSX.Element => {
    const urlPath = "http://localhost:5000/todos";
    const [todoText, setTodoText] = useState<string>("");
    const [todoList, setTodoList] = useState<TodoItem[]>([]);
    // const [todoId, setTodoIt] = useState<number>(1);

    const todoTextChanged = (event: ChangeEvent<HTMLInputElement>) => {
        setTodoText(event.currentTarget.value);
    };
    /*const saveBtnClicked = () => {
        if (todoContent === "") {
            return;
        }
        const item: TodoItem = {
            id: todoId,
            text: todoContent,
        };
        setTodoList([...todoList, item]);
        setTodoIt(todoId + 1);
        setTodoContent("");
    };
    const deleteBtnClicked = (id: number) => {
        const newList = todoList.filter(item => item.id !== id);
        setTodoList(newList);
    };*/

    const getTodoList = async () => {
        const { data } = await axios.get<TodoItem[]>(urlPath);
        setTodoList(data);
    };

    const registerTodo = async () => {
        await axios.post(`${urlPath}`, { text: todoText });
        setTodoText("");
        await getTodoList();
    };

    const deleteTodo = async (id: number) => {
        await axios.delete(`${urlPath}/${id}`);
        await getTodoList();
    };

    useEffect(() => {
        getTodoList();
    }, []);


    return (
        <section>
            <input type="text" onChange={todoTextChanged} value={todoText} />
            <button onClick={registerTodo}>저장</button>
            {todoList.map((item: TodoItem) => {
                return (
                    <section key={item.id}>
                        <label>{item.text}</label>
                        <button onClick={() => deleteTodo(item.id)}>삭제</button>
                    </section>
                );
            })}
        </section>
    );
};

export default TodoList;
