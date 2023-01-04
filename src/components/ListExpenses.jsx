import { Expense } from "../shared/Expense"

import IconAlert from "../img/alerta.png"

const ListExpenses = ({ 
    expenses, 
    setEditExpense, 
    deleteExpense, 
    filter, 
    filterExpenses 
  }) => {
    console.log({filter, filterExpenses})
  return (
    <div className="listado-gastos contenedor">
        <h2>{ expenses.length && filterExpenses.length ? 'Gastos' : 'No Hay Gastos Aun' }</h2>

        { filter && filterExpenses.length ? ( 
            filterExpenses.map(expense => (
              <Expense 
                  key={expense.id}
                  expense={expense}
                  setEditExpense={setEditExpense}
                  deleteExpense={deleteExpense}
              /> 
            ))) : filter && !filterExpenses.length ? (
              <div className="icono-vacio">               
                <img 
                  src={IconAlert} 
                  alt="Icon/Alert"
                  width="400"
                  height="400" 
                />
              </div>            
            ) : (             
              expenses.map(expense => (
                <Expense 
                    key={expense.id}
                    expense={expense}
                    setEditExpense={setEditExpense}
                    deleteExpense={deleteExpense}
                />
            )))
        }    
       
    </div>
  )
}

export { ListExpenses }