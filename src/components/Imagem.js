const Imagem = ({ img, imgStyle }) => {
    const { id, src, alt} = img;
    return (
        <div key={id} className={`${imgStyle} flex justify-content-center`}>
            <img src={src.small} alt={alt} className="border-round"/>
        </div>
    )
}

export default Imagem;