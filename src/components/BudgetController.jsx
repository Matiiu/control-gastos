import { useState, useEffect } from 'react'

import { formatAmount } from "../helpers"


const BudgetController = ({ budget, expenses }) => { 
  const [available, setAvailable] = useState(budget)
  const [spent, setSpent] = useState(0)


  useEffect(() => {
    const totalSpent = expenses.reduce((tot, curr) => curr.amount + tot, 0)      
    setAvailable(budget - totalSpent)    
    setSpent(totalSpent)
  }, [expenses])

  return (
    <div className="contenedor-presupuesto contenedor sombra dos-columnas">
      <div>
        <p>Grafica aqui</p>
      </div>

      <div className="contenido-presupuesto">
        <p>
          <span>Presupuesto: </span> $ {formatAmount(budget)}
        </p>

        <p>
          <span>Diponible: </span> $ {formatAmount(available)}
        </p>

        <p>
          <span>Gastado: </span> $ {formatAmount(spent)}
        </p>
      </div>
      
    </div>
  )
}

export { BudgetController }

