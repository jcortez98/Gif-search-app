import { useEffect, useState} from 'react'
import { getGifs } from '../helpers/getGifs'


export const useGifs = (categoria) => {

    const [images, setImages] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect( () => {
        getGifs(categoria).then((gifs) => setImages(gifs))
        setIsLoading(false)
    }, [])

    return{
        images: images,
        isLoading: isLoading,
    }
}
