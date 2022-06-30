import './index.css';

//components
import ToDoForm from './components/ToDoForm';
import ToDoList from './components/ToDoList';
import ToDoTask from './components/ToDoTask';

function App() {


  return (
    <div className="App">
      <h1>To Do list</h1>
      <ToDoForm />
      <ToDoList />  
    </div>
  );
}

export default App;
