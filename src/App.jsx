import { useState } from 'react'
import {BaseColaboradores} from'./assets/JS/BaseColaboradores'
import Formulario from './compontes/Formulario/Formulario'
import Listado from './compontes/Listado/Listado'
import Buscador from './compontes/Buscador/Buscador'
import Alert from './compontes/Alert/Alert'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'

function App() {
  const [colaboradores, setColaboradores] = useState(BaseColaboradores);
  const [search, setSearch] = useState("");
  const [alert, setAlert] = useState({ error: "", msg: "", color: "" });

  const handleSubmit = (nuevoColaborador) => {
     const colaboradorConId = { ...nuevoColaborador, id: Date.now() };
     setColaboradores([...colaboradores, colaboradorConId]);
   };

  const handleChange = (e) => {
    setSearch(e.target.value);
   };

   const filteredColaboradores = colaboradores.filter((colaborador) => {
     if (
       colaborador.nombre.toLowerCase().includes(search.toLowerCase()) ||
       colaborador.correo.toLowerCase().includes(search.toLowerCase()) ||
       colaborador.edad.toLowerCase().includes(search.toLowerCase()) ||
       colaborador.cargo.toLowerCase().includes(search.toLowerCase()) ||
       colaborador.telefono.toLowerCase().includes(search.toLowerCase())
     ) {
       return true;
     }
     return false;
   });
  return (
    <>
      <div className='buscar'>
        <h1 className='title'>Lista de Colaboradores</h1>
        <Buscador search={search} onChange={handleChange}/>
      </div>
      <div className='colaborador'>
        <Listado colaboradores={filteredColaboradores}/>
        <Formulario onSubmit={handleSubmit} setAlert={setAlert} />
      </div>
      {alert.msg && <Alert color={alert.color}>{alert.msg}</Alert>}
    </>
  );
} 
export default App
