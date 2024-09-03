import axios from "axios"

const apiKey='qQ60UChUlCqcsuo5oQKNfC7AiEt6dEaS'
    
export const getGifs = async(categoria) =>{
    try{
        const {data} = await axios.get(`https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${categoria}&limit=10`)

        const gifs = data.data.map(gif => ({
            id: gif.id,
            title: gif.title,
            url: gif.images.downsized_medium.url,
        }))

        return gifs
    }catch(err){
        console.log(err)
    }
}