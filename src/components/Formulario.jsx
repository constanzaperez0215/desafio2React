import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';



const Formulario = ({setAlert}) => {
  const [nombre, setNombre] = useState("");
  const [ email, setEmail] = useState("");
  const [ password, setPassword] = useState("");
  const [ confirmPassword, setConfirmPassword] =useState("");


  const validarDatos = (e) => {

    e.preventDefault()

    if(nombre==="" || email==="" || password==="" || confirmPassword===""){
      setAlert({
        error: true,
        msj: "Completa los campos vacios",
        color: "danger"
      })
      return
    }

    if(password !== confirmPassword){
      setAlert({
        error: true,
        msj: "Las contraseñas no coinciden",
        color: "danger"
      })
      return
    }

    setAlert({error:false, msj: "Cuenta creada exitosamente!", color:"success"})
    setNombre("")
    setEmail("")
    setPassword("")
    setConfirmPassword("")
  }



  return (
    <Form className="formulario" onSubmit={validarDatos}>
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
        Registrarse
      </Button>
    </Form>
  );
}

export default Formulario;