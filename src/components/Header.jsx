import { NewBudget } from "./NewBudget"
import { BudgetController } from "./BudgetController"

const Header = ({ budget, setBudget, isValidBudget, setIsValidBudget, expenses }) => {
  return (
    <header>
        <h1>Planificador de Gastos</h1>     

        { isValidBudget ? (
            <BudgetController 
              budget={budget}
              expenses={expenses}
            />
        ) : (
            <NewBudget 
              budget={budget}
              setBudget={setBudget}
              setIsValidBudget={setIsValidBudget}
            />
        )}          
        
    </header>
  )
}

export { Header }