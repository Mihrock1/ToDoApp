import axios from "axios";

const TODO_API_BASE_URL = "http://localhost:8080/api/todoItems";

class ToDoService {
    saveToDoItem(todoItem) {
        return axios.post(TODO_API_BASE_URL, todoItem);
    }

    getToDoItems() {
        return axios.get(TODO_API_BASE_URL);
    }

    deleteToDoItem(id) {
        return axios.delete(TODO_API_BASE_URL + "/" + id);
    }

    updateToDoItem(todoItem, id) {
        return axios.put(TODO_API_BASE_URL + "/" + id, todoItem);
    }
}

export default new ToDoService();