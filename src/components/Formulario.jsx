import { useState } from "react";
import { Button, Form } from "react-bootstrap";
function Formulario({ setAlert, colaboradores, setLista, setColaboradores }) {
  const [nombre, setNombre] = useState("");
  const [correo, setCorreo] = useState("");
  const [edad, setEdad] = useState("");
  const [cargo, setCargo] = useState("");
  const [telefono, setTelefono] = useState("");
  const VALIDA_CORREO =
    /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

  const validateForm = (e) => {
    e.preventDefault();
    if (
      nombre === "" ||
      correo === "" ||
      edad === "" ||
      cargo === "" ||
      telefono === ""
    ) {
      setAlert({
        error: true,
        msg: "Completa todos los campos !",
        color: "danger",
      });
      return;
    }
    if (!VALIDA_CORREO.test(correo)) {
      setAlert({
        error: true,
        msg: "El email debe tener un formato válido !",
        color: "danger",
      });
      return;
    }
    setColaboradores([
      ...colaboradores,
      {
        id: Math.random(),
        nombre: nombre,
        correo: correo,
        edad: edad,
        cargo: cargo,
        telefono: telefono,
      },
    ]);
    setLista([
      ...colaboradores,
      {
        id: Math.random(),
        nombre: nombre,
        correo: correo,
        edad: edad,
        cargo: cargo,
        telefono: telefono,
      },
    ]);
    setAlert({
      error: false,
      msg: "Colaborador agregado !",
      color: "success",
    });
    setNombre("");
    setCorreo("");
    setEdad("");
    setCargo("");
    setTelefono("");
    return;
  };
  return (
    <>
      <Form onSubmit={validateForm} noValidate>
        <Form.Control
          type="text"
          id="nombre"
          onChange={(e) => setNombre(e.target.value)}
          value={nombre}
          placeholder="Nombre del colaborador"
        />
        <Form.Control
          type="email"
          id="correo"
          onChange={(e) => setCorreo(e.target.value)}
          value={correo}
          placeholder="Email del colaborador"
        />
        <Form.Control
          type="number"
          id="edad"
          onChange={(e) => setEdad(e.target.value)}
          value={edad}
          placeholder="Edad del colaborador"
        />
        <Form.Control
          type="text"
          id="cargo"
          onChange={(e) => setCargo(e.target.value)}
          value={cargo}
          placeholder="Cargo del colaborador"
        />
        <Form.Control
          type="text"
          id="telefono"
          onChange={(e) => setTelefono(e.target.value)}
          value={telefono}
          placeholder="Teléfono del colaborador"
        />
        <Button
          style={{ background: "#4414fc", border: "#4414fc" }}
          type="submit"
        >
          Agregar colaborador
        </Button>
      </Form>
    </>
  );
}
export default Formulario;
