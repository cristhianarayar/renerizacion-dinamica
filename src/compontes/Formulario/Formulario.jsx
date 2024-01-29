import { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import './Style.css'


const Formulario = ({onSubmit, setAlert}) => {
    
    const [colaborador, setColaborador] = useState({
        nombre: "",
        correo: "",
        edad: "",
        cargo: "",
        telefono: "",
      });
      const handleChange = (e) => {
        setColaborador({
          ...colaborador,
          [e.target.name]: e.target.value,
        });
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        if (
          colaborador.nombre === "" ||
          colaborador.correo === "" ||
          colaborador.edad === "" ||
          colaborador.cargo === "" ||
          colaborador.telefono === ""
        ) {
          setAlert({
            error: true,
            msg: "Completa todos los campos !",
            color: "danger",
          });
          return;
        }
    
        onSubmit(colaborador);
        
        setAlert({
          error: false,
          msg: "Colaborador agregado exitosamente !",
          color: "success",
        });
        setColaborador({
          nombre: "",
          correo: "",
          edad: "",
          cargo: "",
          telefono: "",
        });
      };

  return (
    <>
      <div className="form">
        <h1>Agregar colaborador</h1>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Control type="text" placeholder="Nombre del colaborador" onChange={handleChange}
            value={colaborador.nombre} name="nombre"/>
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Control type="email" placeholder="Email del colaborador" onChange={handleChange}
            value={colaborador.correo} name="correo"/>
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Control type="text" placeholder="Edad del colaborador" onChange={handleChange}
            value={colaborador.edad} name="edad"/>
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Control type="text" placeholder="Cargo del colaborador" onChange={handleChange}
            value={colaborador.cargo} name="cargo"/>
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Control type="text" placeholder="Teléfono del colaborador" onChange={handleChange}
            value={colaborador.telefono} name="telefono"/>
          </Form.Group>

          <Button type="submit" className="btn-reg">
            Agregar Colaborador
          </Button>
        </Form>
      </div>
    </>
  );
};

export default Formulario;
