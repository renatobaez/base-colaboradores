import { Table, Button } from "react-bootstrap";

function Listado({ lista, setLista, setColaboradores }) {
  const eliminarColaborador = (colaborador) => {
    const listaFiltrada = lista.filter((el) => el.id !== colaborador.id);
    setLista(listaFiltrada);
    setColaboradores(listaFiltrada);
  };
  return (
    <>
      <Table striped bordered hover>
        <thead>
          <tr key="0">
            <th>Nombre</th>
            <th>Correo</th>
            <th>Edad</th>
            <th>Cargo</th>
            <th>Teléfono</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {lista.map((colaborador) => (
            <tr key={colaborador.id}>
              <td>{colaborador.nombre}</td>
              <td>{colaborador.correo}</td>
              <td>{colaborador.edad}</td>
              <td>{colaborador.cargo}</td>
              <td>{colaborador.telefono}</td>
              <td>
                <Button
                  style={{ width: "2rem", height: "2rem" }}
                  variant="danger"
                  onClick={() => eliminarColaborador(colaborador)}
                >
                  X
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
}
export default Listado;
