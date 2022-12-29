import { useState, useEffect } from 'react'

import { Message } from "./Message"

const Modal = ({ 
    setModal,  
    animateModal, 
    setAnimateModal, 
    saveExpense, 
    editExpense,
    setEditExpense   
}) => {    
    const [message, setMessage] = useState('')

    const [name, setName] = useState('')
    const [amount, setAmount] = useState('')
    const [category, setCategory] = useState('')
    const [date, setDate] = useState('')
    const [id, setId] = useState('')

    useEffect(() => {

        if(Object.keys(editExpense).length > 0) {
            setName(editExpense.name)
            setAmount(editExpense.amount)
            setCategory(editExpense.category)
            setId(editExpense.id)
            setDate(editExpense.date)       
        }            
    }, [])

    const handleSubmit = e => {
        e.preventDefault()

        if ([ name, amount, category ].includes('')) {
            setMessage('Todos los campos son obligatorios') 
            setTimeout(() => setMessage(''), 3000)
            return              
        }  
        else if (amount < 0) {
            setMessage('El valor no puede ser menor a $1000 COP')
            return      
        }

        saveExpense({ name, amount, category, id, date })
        setModal(false)
        setEditExpense({})
        setAnimateModal(false)
    }  

  return (
    <div className="modal">      
        <form 
            className={`formulario ${animateModal ? "animar" : "cerrar"}`}
            onSubmit={handleSubmit}
            >
            <legend>{ editExpense.name ? 'Editar Gasto' : 'Nuevo Gasto' }</legend>

            { message && <Message tipo="error">{message}</Message> }

            <div className="campo">
                <label htmlFor="name">Nombre Gasto</label>
                <input 
                    type="text" 
                    name="name" 
                    id="name"
                    placeholder="Añade el Nombre del Gasto" 
                    value={name}
                    onChange={ e => setName(e.target.value) }
                />
            </div> 

            <div className="campo">
                <label htmlFor="amount">Valor Gasto</label>
                <input 
                    type="number" 
                    name="amount" 
                    id="amount"
                    min="0"
                    placeholder="Ingrese el Valor del Gasto"
                    value={amount}
                    onChange={ e => setAmount(Number(e.target.value)) }
                />                
            </div>     

             <div className="campo">
                <label htmlFor="category">Categoria</label>
               <select 
                id="category"
                value={category}
                onChange={ e => setCategory(e.target.value) }                
                >
                    <option hidden disabled value="" > -- Sleccione -- </option>
                    <option value="ahorro">Ahorro</option>
                    <option value="comida">Comida</option>
                    <option value="casa">Casa</option>
                    <option value="gastos">Gastos</option>
                    <option value="ocio">Ocio</option>
                    <option value="salud">Salud</option>
                    <option value="suscripciones">Suscripciones</option>
               </select>
            </div> 

            <input 
                type="submit" 
                value={ editExpense.name ? 'Guardar Cambios' : 'Añadir Gasto' } 
            />
        </form>  
    </div>  
  )
}

export { Modal }
