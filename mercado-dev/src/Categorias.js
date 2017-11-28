import React from 'react'

import {Link, Route} from 'react-router-dom'

import HeaderInterno from './HeaderInterno'
import Categoria from './Categoria'
import Anuncio from './Anuncio'

const Categorias = (props) => {
    return (
        <div>
            <HeaderInterno />
            <div className='container' style={{ paddingTop: '120px' }}>
                <h1>Categorias</h1>
                <div className="row">
                    
                    <div className="col-lg-4">
                        {
                            props.categorias.map(
                                categoria => {
                                    return(
                                       <li key={categoria.categoria}><Link to={`/categorias/${categoria.url}`}>{categoria.categoria}</Link></li>
                                    )
                                }
                            )
                        }
                    </div>
                    
                    <div className="col-lg-4">        
                        <Route path='/categorias/:urlCategoria' exact component={Categoria}/>
                        <Route path='/categorias/:urlCategoria/:idAnuncio' render={(props) => <Anuncio {...props} />} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Categorias