import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';


const Formulario = () => {
  const [nombre, setNombre] = useState("");
  const [ email, setEmail] = useState("");
  const [ password, setPassword] = useState("");
  const [ confirmPassword, setConfirmPassword] =useState("");

  console.log(nombre)
  console.log(email)
  console.log(password)
  console.log(confirmPassword)

  return (
    <Form className="formulario">
      <Form.Group className="mb-3"  >
        <Form.Control
        type="text"
        name="nombre"
        placeholder="Nombre"
        onChange={(e) => setNombre(e.target.value)}
        value={nombre} />
      </Form.Group>

      <Form.Group className="mb-3" >
        <Form.Control
        type="email"
        name="email"
        placeholder="tuemail@ejemplo.com"
        onChange={(e) => setEmail(e.target.value)}
        value={email}/>
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Control
          type="password"
          name='password'
          placeholder="Contraseña"
          onChange={(e) => setPassword(e.target.value)}
          value={password}/>
      </Form.Group>

      <Form.Group className="mb-3" >
        <Form.Control
          type="password"
          name='confirmPassword'
          placeholder="Confirma tu contraseña"
          onChange={(e) => setConfirmPassword(e.target.value)}
          value={confirmPassword}/>
      </Form.Group>

      <Button className='btn btn-dark mt-3' variant="primary" type="submit">
        Agregar
      </Button>
    </Form>
  );
}

export default Formulario;