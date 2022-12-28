import { Expense } from "../shared/Expense"

const ListExpenses = ({ expenses, setEditExpense, deleteExpense }) => {
   
  return (
    <div className="listado-gastos contenedor">
        <h2>{ expenses.length ? 'Gastos' : 'No Hay Gastos Aun' }</h2>

        { expenses.map(expense => (
            <Expense 
                key={expense.id}
                expense={expense}
                setEditExpense={setEditExpense}
                deleteExpense={deleteExpense}
            />
        ))}
    </div>
  )
}

export { ListExpenses }