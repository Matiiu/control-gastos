import { useState, useEffect } from 'react'
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar'
import 'react-circular-progressbar/dist/styles.css'

import { formatAmount } from "../helpers"


const BudgetController = ({ budget, expenses }) => { 
  const [available, setAvailable] = useState(budget)
  const [spent, setSpent] = useState(0)
  const [percentage, setPercentage] = useState(0)


  useEffect(() => {
    const totalSpent = expenses.reduce((tot, curr) => curr.amount + tot, 0)      
    const totalAvaliable = budget - totalSpent
    const newPercentage = (((budget - totalAvaliable) / budget ) * 100).toFixed(2)    
    setAvailable(totalAvaliable)    
    setSpent(totalSpent)
    setTimeout(() => setPercentage(newPercentage) ,500)
  }, [expenses])

  return (
    <div className="contenedor-presupuesto contenedor sombra dos-columnas">
      <div>
        <CircularProgressbar 
          value={percentage}
          text={`${percentage}% Gastado`}
          styles={buildStyles({
            pathColor: percentage < 50 ? '#3B82F6'  : percentage >= 50 && percentage < 80 ? '#e04c11'  : '#d62626',
            trailColor: '#F5F5F5',
            textColor: percentage < 50 ? '#3B82F6'  : percentage >= 50 && percentage < 80 ? '#e04c11'  : '#d62626'
          })}
        />
      </div>

      <div className="contenido-presupuesto">
        <p>
          <span>Presupuesto: </span> {formatAmount(budget)}
        </p>

        <p>
          <span>Diponible: </span> {formatAmount(available)}
        </p>

        <p>
          <span>Gastado: </span> {formatAmount(spent)}
        </p>
      </div>
      
    </div>
  )
}

export { BudgetController }

