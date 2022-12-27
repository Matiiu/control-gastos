import { formatDate, formatAmount } from "../helpers"

import Iconsaving from "../img/icono_ahorro.svg"
import IconHome from "../img/icono_casa.svg"
import IconFood from "../img/icono_comida.svg"
import IconExpenses from "../img/icono_gastos.svg"
import IconOcio from "../img/icono_ocio.svg"
import IconHealth from "../img/icono_salud.svg"
import IconSubscriptions from "../img/icono_suscripciones.svg"


const Expense = ({ expense }) => { 

  const iconDictionary = {
    ahorro: Iconsaving,
    comida: IconFood,
    casa: IconHome,
    gastos: IconExpenses,    
    ocio: IconOcio,
    salud: IconHealth,
    suscripciones: IconSubscriptions
  }

  return (
    <div className="gasto sombra">
      <div className="contenido-gasto">
        <img 
          src={iconDictionary[expense.category]}
        />
        <div className="descripcion-gasto">
          <p className="categoria">{expense.category}</p>
          <p className="nombre-gasto">{expense.name}</p>
          <p className="fecha-gasto">
            Agregado el: {''}
            <span>{ formatDate(expense.date) }</span> 
          </p>
        </div>
        
      </div>   
      <p className="cantidad-gasto">${ formatAmount(expense.amount) }</p>
    </div>
  )
}

export { Expense }
