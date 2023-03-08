import React from "react";

const todoItem = ({ todoItem, deleteTodoItem }) => {

    return (
        <tr key={todoItem.id}>
            <td className="text-left px-6 py-4 whitespace-nowrap">
                <div className="text-sm text-gray-500">{todoItem.item}</div>
            </td>
            <td className="text-right px-6 py-4 whitespace-nowrap font-medium text-sm">
            </td>
            <td className="text-right px-6 py-4 whitespace-nowrap font-medium text-sm">
                <a
                    onClick={(e, id) => deleteTodoItem(e, todoItem.id)}
                    className="text-indigo-600 hover:text-indigo-800 hover:cursor-pointer">
                    Delete
                </a>
            </td>
        </tr>
    );
};

export default todoItem;