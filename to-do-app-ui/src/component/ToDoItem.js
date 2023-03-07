import React from "react";

const todoItem = ({ todoItem, deletetodoItem }) => {

    return (
        <tr key={todoItem.id}>
            <td className="text-left px-6 py-4 whitespace-nowrap">
                <div className="text-sm text-gray-500">{todoItem.item}</div>
            </td>
            <td className="text-right px-6 py-4 whitespace-nowrap font-medium text-sm">
            </td>
        </tr>
    );
};

export default todoItem;