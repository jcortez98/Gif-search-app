import { useState } from 'react'
import { AddCategoria, GifGrid } from './'

export const GifExpertApp = () => {

    const [categorias, setCategorias] = useState([])

    const handleAddCategoria = (categoria) => {

      if(categorias.includes(categoria)) return;

      setCategorias([categoria, ...categorias])
    }

  return (
    <>
      <h1>GifExpertAPP</h1>

      <AddCategoria onSetCategoria={categoria => handleAddCategoria(categoria)}/>

          {categorias.map((categoria) => {
              return (
                <GifGrid key={categoria} categoria={categoria}/>
              )
          })}
    </>
  )
}
