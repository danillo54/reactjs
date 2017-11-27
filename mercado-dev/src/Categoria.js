import React, {Component} from 'react'
import axios from 'axios'


class Categoria extends Component {
    
    constructor(props){
        super(props)
        
        this.state = {
            anuncios: []
        }

        const url = "https://mercadodev-aeba8.firebaseio.com/anuncios.json"
        axios
            .get(url)
            .then( data => {
                this.setState( {anuncios: data.data})
            })
    }

    render() {
        return (
            <div>
                <h1>Categoria
                {JSON.stringify(this.props.match.params.urlCategoria)}</h1>
                <div>

                </div>
            </div>
        )
    } 
}

export default Categoria