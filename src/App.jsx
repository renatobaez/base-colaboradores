import { BaseColaboradores } from "./BaseColaboradores"
import Buscador from "./components/Buscador"
import Listado from "./components/Listado"
import Formulario from "./components/Formulario"
import Alert from "./components/Alert"
import { useState } from 'react'

function App() {
  const [message, setAlert] = useState({
    error: false,
    msg: "",
    color: ""
  })
  const [colaboradores, setColaboradores] = useState(BaseColaboradores)
  const [lista, setLista] = useState(colaboradores)
  return (
    <>
      <section>
        <div className="lista">
          <h1>Lista de colaboradores</h1>
          <div className="buscador">
            <Buscador colaboradores={colaboradores} setLista={setLista}/>
          </div>
          <Listado lista={lista} setLista={setLista} setColaboradores={setColaboradores}/>
        </div>
        <div className="formulario">
          <h3>Agregar colaborador</h3>
          <Formulario setAlert={setAlert} setLista={setLista} colaboradores={colaboradores} setColaboradores={setColaboradores}/>
          <Alert color={message.color} msg={message.msg} />
        </div>
      </section>    
    </>
  )
}
export default App