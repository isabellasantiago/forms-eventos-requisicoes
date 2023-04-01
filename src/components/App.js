import React from "react";
import Busca from "./Busca";
import ListaImagens from "./ListaImagens";
import PexelsLogo from './PexelsLogo';
import pexelsClient from "../utils/pexelsClient";

class App extends React.Component {
    state ={
        pics: []
    }

    onBuscaRealizada = (termo) => {
        pexelsClient.get('/search', {
            params: { query: termo}
        }).then(result => this.setState({
            pics: result.data.photos
        }))
    }

    render(){
        return (
            <div className="grid justify-content-center m-auto w-9 border-round border-1 border-400">
                <div className="col-12">
                    <h1>Exibir uma lista de ...</h1>
                </div>
                <div className="col-2 w-full">
                    <PexelsLogo />
                </div>
                <div className="col-8">
                    <Busca 
                        onBuscaRealizada={this.onBuscaRealizada}
                    />
                </div>
                <div className="col-12">
                    <div className="grid">
                        <ListaImagens
                            pics={this.state.pics}
                            imgStyle={'col-12 md:col-6 lg:col-4 xl:col-3'}
                        />
                    </div>
                </div>
            </div>
        )
    }

}

export default App;