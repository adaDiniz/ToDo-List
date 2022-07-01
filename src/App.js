import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';

//components
import ToDoForm from './components/ToDoForm';

function App() {
  
  return (
    <div className="App">
      <h1>ToDo List</h1>
      <ToDoForm />
    </div>
  );
}

export default App;
