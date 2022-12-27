import { useState } from 'react'

import { Message } from "../shared/Message"

const NewBudget = ({ budget, setBudget, setIsValidBudget }) => {

  const [message, setMessage] = useState('')
  
  const handleBudget = e => {
    e.preventDefault()

    const pattern = new RegExp(/[^0-9\.]/g)

    if ( pattern.test(Number(budget) )){
       setMessage('No Es un Presupuesto Valido')
       setBudget(0)
       return
    }
    else if (Number(budget) < 1000) {
      setMessage('El Prsupuesto debe ser menor o igual a $1.000')
      setBudget(0)      
      return 
    }
    setMessage('')
    setIsValidBudget(true)

  }


  return (
    <div className="contenedor-presupuesto contenedor sombra">
       <form onSubmit={handleBudget} className="formulario">
          <div className="campo">
            <label htmlFor="presupuesto">Definir Presupuesto</label>
            <input 
              className="nuevo-presupuesto"
              type="number"
              placeholder="Añade tu Presupuesto"
              value={budget}
              onChange={ e => setBudget(Number(e.target.value)) }
              min="1000"           
              required
            />
          </div>

          <input type="submit" value="añadir" />

          { message && <Message tipo="error">{message}</Message> }
       </form>       
    </div>
  )
}

export { NewBudget }