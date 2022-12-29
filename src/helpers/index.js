export const generateId = () => {
    const random = Math.random().toString(36).substr(2)
    const date = Date.now().toString(36)
    return random + date
} 

export const formatAmount = amount => {
    return amount.toLocaleString('En-US', {
      style: 'currency',
      currency: 'USD'
    })
  }

export const formatDate = date => {
    const newDat = new Date(date)
    const options = { 
            year: 'numeric', 
            month: 'long', 
            day: '2-digit' 
    }
    return newDat.toLocaleDateString('es-ES', options)
}