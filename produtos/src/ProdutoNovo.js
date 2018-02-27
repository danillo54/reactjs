import React, {Component} from 'react'
import {Redirect} from 'react-router-dom'

class ProdutoNovo extends Component{
    
    constructor(props){
        super(props)

        this.handleNewProduto = this.handleNewProduto.bind(this)

        this.state = {
            redirect: false
        }
    }

    handleNewProduto(){

        const produto = {            
            produto: this.refs.produto.value,
            categoria: this.refs.categoria.value
        }

        this.props.createProduto(produto)
            .then((res) =>{
                this.setState({redirect: '/produtos/categoria/' + produto.categoria})
            })
    }
    
    render(){

        const {categorias} = this.props

        if(this.state.redirect){
            return <Redirect to={this.state.redirect} />
        }

        return ( 
           <div>
                <h2>Novo Produto</h2>
                <div className='form-group'>
                    <select className="form-control" ref='categoria'>
                        {categorias
                            .map((cat) => <option key={cat.id} value={cat.id}>{cat.categoria}</option>)
                        }
                    </select>
                    <input type='text'
                        className='form-control' 
                        placeholder='Nome do novo produto'
                        ref='produto'/>
                    <button className='btn btn-primary' onClick={this.handleNewProduto}>Salvar</button>
                </div>
           </div>)
    }
}

export default ProdutoNovo