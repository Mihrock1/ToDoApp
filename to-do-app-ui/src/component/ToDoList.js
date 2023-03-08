import React, {useEffect, useState} from 'react';
import ToDoService from "../service/ToDoService";
import ToDoItem from "./ToDoItem";

const ToDoList = () => {

    const [task, setTask] = useState({
        id: "",
        item: ""
    });

    const handleChange = (e) => {
        const value = e.target.value;
        setTask({...task, [e.target.name]: value });
    };

    const saveTask = (e) => {
        e.preventDefault();
        ToDoService.saveToDoItem(task)
            .then((response) => {
                console.log(response);
                fetchData();
            })
            .catch((error) => {
                console.log(error);
            });
    }

    const deleteToDoItem = (e, id) => {
        e.preventDefault();
        ToDoService.deleteToDoItem(id).then(() => {
            if (todoItems) {
                setToDoItems((prevElement) => {
                    return prevElement.filter((item) => item.id !== id);
                });
            }
        });
    };

    const [loading, setLoading] = useState(true);
    const [todoItems, setToDoItems] = useState(null);

    const fetchData = async () => {
        setLoading(true);
        try {
            const response = await ToDoService.getToDoItems();
            setToDoItems(response.data);
        } catch (error) {
            console.log(error);
        }
        setLoading(false);
    };

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <>
            <div className="max-w-md mx-auto py-6">
                <div className="font-thin text-2xl tracking">
                    <h1>Add New Task</h1>
                </div>
                <div className="justify-center h-14 w-full my-4 space-x-4">
                    <input
                        type="text"
                        name="item"
                        value={task.item}
                        onChange={(e) => handleChange(e)}
                        className="w-96 border mt-2 px-2 py-2"
                    ></input>
                    <button onClick={saveTask}
                            className="px-2 py-2 rounded text-white font-semibold bg-green-500 hover:bg-green-700">
                        Add
                    </button>
                </div>
            </div>
            <div className="flex shadow border-b">
                <table className="min-w-full">
                    <thead className="bg-gray-50">
                    <tr>
                        <th className="text-left font-medium uppercase tracking-wider py-2 px-6">
                            Tasks To Do
                        </th>
                    </tr>
                    </thead>
                    {!loading && (
                        <tbody className="bg-white">
                        {todoItems.map((todoItem) => (
                            <ToDoItem
                                todoItem={todoItem}
                                deletetodoItem={deleteToDoItem}
                                key={todoItem.id}></ToDoItem>
                        ))}
                        </tbody>
                    )}
                </table>
            </div>
        </>
    );
}

export default ToDoList;