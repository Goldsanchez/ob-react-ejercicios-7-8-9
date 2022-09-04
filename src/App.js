import { useState, useRef } from "react";
import modelContact from "./models/modelContact";

function App() {

  const [contactos, setContactos] = useState([])

  const refAdd = useRef()

  const addContact = (e) => {
    e.preventDefault()
    console.log(refAdd.current.value)
    const tempContact = [...contactos]
    const newContact = new modelContact(refAdd.current.value, false)
    tempContact.push(newContact)
    setContactos(tempContact)
    refAdd.current.value = ""
  }

  const deleteContact = (index) => {
    const tempContact = [...contactos]
    tempContact.splice(index,1)
    setContactos(tempContact)

  }
  const isConected = (index) => {
    const tempContact = [...contactos]
    tempContact[index].conected = !tempContact[index].conected
    setContactos(tempContact)
  }

  return (
    <div className="App container-sm col-4 mx-3 text-center">
      <h1>Agenda de Contactos</h1>
      <form onSubmit={addContact} action="" className="input-group my-3">
        <input ref={refAdd} type="text" className="form-control"/>
        <button type="submit" className="btn btn-primary btn-sm">Agregar</button>
      </form>
      <ul className="list-group list-group-flush">
        {contactos.map((value, index)=><li className="list-group-item">{value.name} &nbsp;
        {value.conected
        ?<i onClick={()=> isConected(index)} class="bi bi-toggle-on text-success"></i>
        :<i onClick={()=> isConected(index)} class="bi bi-toggle-off"></i>} &nbsp;
        <i onClick={()=> deleteContact(index)} className="bi bi-trash-fill text-danger"></i></li>)}
      </ul>
    </div>
  );
}

export default App;
