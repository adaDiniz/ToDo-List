import { useState, useEffect } from "react";
import Form from "react-bootstrap/Form";


const API = "http://localhost:3000";

const ToDoForm = () => {

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {

    const loadData = async() => {
      
      setLoading(true);

      const res = await fetch(API + "/todos")
      .then((res) => res.JSON())
      .then((data) => data)
      .catch((err) => console.log(err));

      setLoading(false);

      setTodos(res)
    }

    loadData();
  }, [])
 

  const handleSubmit = async (e) => {
    e.preventDefault();

    const toDo = {
      id: Math.random(),
      title,
      description,
    };

    console.log(toDo);

    await fetch(API + '/todos', {
      method: "POST",
      body: JSON.stringify(toDo),
      headers: {
        "Content-Type": "application/json",
      },
    });

    setTitle("");
    setDescription("");
  };
  
  return (
    <div>
      <Form className="toDoForm" onSubmit={handleSubmit}>
        <Form.Control type="text" name="text" placeholder="Título da Task" onChange={(e) => setTitle(e.target.value)} value={title || ""} required />

        <Form.Control as="textarea" rows={2} name="description" placeholder="Descreva sua Task" onChange={(e) => setDescription(e.target.value)} value={description || ""} required />
        
        <Form.Select aria-label="Qual é a prioridade da sua task?">
          <option> </option>
          <option value="facil">Fácil</option>
          <option value="dificil">Difícil</option>
          <option value="urgente">Urgente</option>
        </Form.Select>

        <input type="date" name="dateConclusion"></input>

        <button className="toDoButton">Adicionar Task</button> 
      </Form> 
    </div>
  )
}

export default ToDoForm