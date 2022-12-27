import { Expense } from "../shared/Expense"

const ListExpenses = ({ expenses }) => {
   
  return (
    <div className="listado-gastos contenedor">
        <h2>{ expenses.length ? 'Gastos' : 'No Hay Gastos Aun' }</h2>

        { expenses.map(expense => (
            <Expense 
                id={expense.id}
                expense={expense}
            />
        ))}
    </div>
  )
}

export { ListExpenses }