import { useState, useEffect } from 'react'

import { Header } from "./components/Header"
import { Modal } from "./shared/Modal"
import { generateId } from "./helpers"
import { ListExpenses } from "./components/ListExpenses"

import NewIconBudget from "./img/nuevo-gasto.svg"


function App() {
  const [expenses, setExpenses] = useState([])  
  const [budget, setBudget] = useState(0)
  const [isValidBudget, setIsValidBudget] = useState(false)
  const [modal, setModal] = useState(false)
  const [animateModal, setAnimateModal] = useState(false)
  const [editExpense, setEditExpense] = useState({})
  

  useEffect(() => {

    if (Object.keys(editExpense).length > 0) {
      setModal(true)   
      setTimeout(() => setAnimateModal(true), 100)  
    }
  }, [editExpense])
  

  const handleNewExpense = () => {
    setModal(value => value = !value)  
    setEditExpense({})  
    setTimeout(() => setAnimateModal(value => value = !value), 100)  
  }

  const saveExpense = expense => {
    if (expense.id) {
      const updateExpense = expenses.map(expenseState => expenseState.id === expense.id ? expense : expenseState)
      setExpenses(updateExpense)   
      
    } else {
      expense.id = generateId()
      expense.date = Date.now()
      setExpenses([ ...expenses, expense ])
    }  
  }

  const deleteExpense = id => {
   const updateExpenses = expenses.filter(expense => expense.id !== id)
   setExpenses(updateExpenses)
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
                  setEditExpense={setEditExpense}
                  deleteExpense={deleteExpense}
                />
              </main>

              <figure className="nuevo-gasto">
              <img 
                src={NewIconBudget} 
                alt="Icon/New-Budget"         
                onClick={handleNewExpense}
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
              editExpense={editExpense}      
            />
        }

      </div>
  )
}

export default App
