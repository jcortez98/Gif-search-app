import { useState } from "react"
import PropTypes from 'prop-types'

export const AddCategoria = ({onSetCategoria}) => {

    const [categoria, setCategoria] = useState('')

    const handleAdd = (e) => {
        e.preventDefault()

        if(categoria.trim().length < 1) return

        onSetCategoria(categoria)
        setCategoria('')
    }

    const handleCategoriaChange = (e) => {
        setCategoria(e.target.value)
    }

  return (
    <>
        <form onSubmit={handleAdd}>
            <label htmlFor="categoria" className='me-2'>Categoria</label>
            <input type="text" id='categoria' value={categoria} onChange={handleCategoriaChange} className='me-2'/>
            <input type="submit" value="Agregar" />
        </form>
        
    </>
  )
}


<input className="form-control w-50 me-2"></input>