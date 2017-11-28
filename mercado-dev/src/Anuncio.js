import React, {Component} from 'react'
import axios from 'axios'

class Anuncio extends Component {
    
    constructor(props){
        super(props)

        this.state = {
            anuncio: {}
        }

        const id = this.props.match.params.idAnuncio
        const url = `https://mercadodev-aeba8.firebaseio.com/anuncios/${id}.json`

        axios
            .get(url)
            .then( (data) =>{
                this.setState({anuncio: data.data})
            })
    }
    
    render(){
        const anuncio = this.state.anuncio
        return(
            <div>
                <h1>{anuncio.nome}</h1>
                <p><img src={anuncio.foto}/></p>
            </div>
        )
    }
}

export default Anuncio