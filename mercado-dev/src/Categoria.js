import React, {Component} from 'react'
import axios from 'axios'

import AnuncioHome from './AnuncioHome'

class Categoria extends Component {
    
    constructor(props){
        super(props)
        
        this.state = {
            anuncios: {}
        }

        this.loadAnuncions = this.loadAnuncions.bind(this)

        this.loadAnuncions(this.props.match.params.urlCategoria)
        
    }

    loadAnuncions(urlCategoria){
        const url = `https://mercadodev-aeba8.firebaseio.com/anuncios.json?orderBy=%22categoria%22&equalTo=%22${urlCategoria}%22`
        axios
            .get(url)
            .then( (data) => {
                this.setState( {anuncios: data.data})
                this.categoria =  this.props.match.params.urlCategoria
            })
    }

    componentWillReceiveProps(newProps){
        if(newProps.match.params.urlCategoria){
            if(this.categoria !== newProps.match.params.urlCategoria){
                this.loadAnuncions(newProps.match.params.urlCategoria)
            }
        }
    }

    render() {
        return (
            <div>
                <h1>Categoria
                    {JSON.stringify(this.props.match.params.urlCategoria)}
                </h1>
                <div className="row">                    
                    { Object.keys(this.state.anuncios).map( key => {
                        const anuncio = this.state.anuncios[key]
                        return <AnuncioHome id={key} key={key} anuncio={anuncio} />                                                        
                    })}            
                </div>
            </div>
        )
    } 
}

export default Categoria