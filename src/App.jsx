import { useState, useEffect } from 'react'

import { Header } from "./components/Header"
import { Modal } from "./shared/Modal"
import { generateId } from "./helpers"
import { ListExpenses } from './components/ListExpenses'

import NewIconBudget from "./img/nuevo-gasto.svg"


function App() {
  const [expenses, setExpenses] = useState([])  
  const [budget, setBudget] = useState(1000)
  const [isValidBudget, setIsValidBudget] = useState(false)
  const [modal, setModal] = useState(false)
  const [animateModal, setAnimateModal] = useState(false)

  const handleNewBudget = () => {
    setModal(value => value = !value)
    setTimeout(() => setAnimateModal(value => value = !value), 100)  
  }

  const saveExpense = expense => {
    expense.id = generateId()
    expense.date = Date.now()
    setExpenses([...expenses, expense])
  }

  return (
      <div className={ modal ? 'fijar' : '' }>       
        <Header 
          expenses={expenses}
          budget={budget}
          setBudget={setBudget}
          isValidBudget={isValidBudget}
          setIsValidBudget={setIsValidBudget}
        /> 

        { isValidBudget && (
            <> 
              <main>
                <ListExpenses 
                  expenses={expenses}
                />
              </main>

              <figure className="nuevo-gasto">
              <img 
                src={NewIconBudget} 
                alt="Icon/New-Budget"         
                onClick={handleNewBudget}
              />
              </figure>
            </>
        )}
        
        { modal && 
            <Modal  
              setModal={setModal}   
              setAnimateModal={setAnimateModal}     
              animateModal={animateModal}   
              saveExpense={saveExpense}         
            />
        }

      </div>
  )
}

export default App
