import { useState, useEffect } from "react";
import Form from "react-bootstrap/Form";
import { Button } from "react-bootstrap";


const ToDoForm = () => {

  const [state, setState] = useState({
    title: "",
    description: "",
    category: "",
    date: "",
  })
  
  const handleChange = (event) => {
    
    setState({
      ...state,
      [event.target.name]: event.target.value,
    });
  }

  const handleSubmit = (event) => {
    event.preventDefault();

   const toDo = {
    ...state,
    [event.target.name]: event.target.value,
    };

    console.log(toDo);
 
  }

  return (
    <div>
      <Form className="toDoForm" onSubmit={ handleSubmit }>
      <Form.Group className="mb-3">
        <Form.Control 
          type="text" 
          name="title" 
          onChange={ handleChange } 
          placeholder="Título da Task" 
          required />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Control 
          as="textarea" 
          rows={2} 
          name="description" 
          onChange={ handleChange } 
          placeholder="Descreva sua Task" />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Select aria-label="Qual é a prioridade da sua task?" 
          name="category" onChange={ handleChange }>
            <option value="Fácil">Fácil</option>
            <option value="Difícil">Difícil</option>
            <option value="Urgente">Urgente</option>
        </Form.Select>
      </ Form.Group>

        <input type="date" 
          name="date" 
            onChange={ handleChange } />

      <Form.Group className="mb-3">
        <Button className="toDoButton">Adicionar Task</Button> 
      </Form.Group>

    </Form>

      <div>
        <h2>Próximas Tasks:</h2>
      </div> 
    </div>
  )
}

export default ToDoForm