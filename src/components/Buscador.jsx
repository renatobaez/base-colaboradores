import { Form } from "react-bootstrap";
function Buscador({ colaboradores, setLista }) {
  const buscar = (dato) => {
    const listaFiltrada = colaboradores.filter(
      (el) =>
        el.nombre.toLowerCase().includes(dato.toLowerCase()) ||
        el.correo.toLowerCase().includes(dato) ||
        el.edad.includes(dato) ||
        el.cargo.toLowerCase().includes(dato) ||
        el.telefono.includes(dato)
    );
    setLista(listaFiltrada);
  };
  return (
    <>
      <Form.Control
        type="text"
        id="buscador"
        onChange={(e) => buscar(e.target.value)}
        placeholder="Busca un colaborador"
      />
    </>
  );
}
export default Buscador;
