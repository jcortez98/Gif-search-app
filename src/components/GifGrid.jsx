import PropTypes from 'prop-types'
import { GifCard } from './'
import { useGifs } from '../hooks/useGifs'

export const GifGrid = ({categoria}) => {

    const {images, isLoading} = useGifs(categoria)

  return (
    <>
    {
        isLoading && <h2>Cargando...</h2>
    }

        <h1>{categoria}</h1>

        <div className="row row-cols-2 row-cols-lg-5 g-2 g-lg-3">
            {images.map(image => (
                    <div key={image.id} className='col'>
                        <GifCard  image={image}/>
                    </div>
            ))}
        </div>
    </>
  )
}

GifGrid.propTypes = {
    categoria: PropTypes.string
}