import Imagem from './Imagem';


const ListaImagens = ({ pics, imgStyle }) => {

    return (
        <>
        {pics.map(pic => {
            return (
                <Imagem
                    imgStyle={imgStyle} 
                    img={pic}
                />
            )
        })}
        </>
    )
}

export default ListaImagens;