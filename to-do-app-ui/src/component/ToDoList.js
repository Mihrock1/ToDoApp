import React, {useEffect, useState} from 'react';
import ToDoService from "../service/ToDoService";
import ToDoItem from "./ToDoItem";

const ToDoList = () => {

    const [loading, setLoading] = useState(true);
    const [todoItems, setToDoItems] = useState(null);

    useEffect(() => {
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
        fetchData();
    }, []);

    return (
        <div className="flex shadow border-b">
            <table className="min-w-full">
                <thead className="bg-gray-50">
                <tr>
                    <th className="text-left font-medium uppercase tracking-wider py-2 px-6">
                        Task To-Do
                    </th>
                </tr>
                </thead>
                {!loading && (
                    <tbody className="bg-white">
                    {todoItems.map((todoItem) => (
                        <ToDoItem
                            todoItem={todoItem}
                            // deletetodoItem={deletetodoItem}
                            key={todoItem.id}></ToDoItem>
                    ))}
                    </tbody>
                )}
            </table>
        </div>
    );
}

export default ToDoList;