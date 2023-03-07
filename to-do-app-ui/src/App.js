import './App.css';
import {BrowserRouter} from "react-router-dom";
import NavBar from "./component/NavBar";
import ToDoList from "./component/ToDoList";

function App() {
  return (
      <>
        <BrowserRouter>
            <NavBar />
            <ToDoList />
        </BrowserRouter>
      </>
  );
}

export default App;
