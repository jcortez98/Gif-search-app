export const GifCard = ({image}) => {
  return (
    <>
        <div className='card'>
            <img src={image.url} alt="GIF" className='card-img-top'/>
            <div className='card-body'>
                <p className='card-text'>{image.title}</p>
            </div>
        </div>
    </>
  )
}
