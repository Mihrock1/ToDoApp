import axios from "axios";

const EMPLOYEE_API_BASE_URL = "http://localhost:8080/api/todoItems";

class ToDoService {
    saveToDoItem(todoItem) {
        return axios.post(EMPLOYEE_API_BASE_URL, todoItem);
    }

    getToDoItems() {
        return axios.get(EMPLOYEE_API_BASE_URL);
    }
}

export default new ToDoService();