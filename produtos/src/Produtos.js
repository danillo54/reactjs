import React,{Component } from 'react'
import {Route, Link} from 'react-router-dom'

import ProdutosHome from './ProdutosHome'
import ProdutoNovo from './ProdutoNovo'
import Categoria from './Categoria'


class Produtos extends Component {
    constructor(props){
        super(props)

        this.state = {
            editCategoria :''
        }
        
        this.handleNewCategoria = this.handleNewCategoria.bind(this)   
        this.handleEditCategoria = this.handleEditCategoria.bind(this)             
        this.editCategoria = this.editCategoria.bind(this)   
        this.cancelEditCategoria = this.cancelEditCategoria.bind(this)             
        this.renderCategoria = this.renderCategoria.bind(this)
    }

    componentDidMount(){
         this.props.loadCategorias()
    }
   
    renderCategoria(cat){
        return <li key={cat.id}>
                    {this.state.editCategoria === cat.id &&
                        <div className='input-group'>
                            <div className='input-group-btn'>
                                <input type='text'  
                                    onKeyUp={this.handleEditCategoria}
                                    ref={'cat-'+ cat.id}
                                    className='form-control' 
                                    defaultValue={cat.categoria}/>
                                <button className='btn' onClick={this.cancelEditCategoria}>cancelar</button>
                            </div>
                        </div>
                    }
                    {this.state.editCategoria !== cat.id  && 
                        <div>                    
                            <button className='btn btn-sm' onClick={ () => this.props.removeCategoria(cat) }>
                                <span className='glyphicon glyphicon-remove'></span>
                            </button>
                            <button className='btn btn-sm' onClick={ () => this.editCategoria(cat) }>
                            <span className='glyphicon glyphicon-pencil'></span>
                            </button>
                            <Link  to={`/produtos/categoria/${cat.id}`}>{cat.categoria}</Link>
                        </div>
                    }
                </li>
    }

    handleNewCategoria(event){
        event.preventDefault()
        if(event.keyCode === 13){
           this.props.createCategoria({
               categoria: this.refs.categoria.value
           })
           this.refs.categoria.value = ""
        }
       
    }

    handleEditCategoria(event){
        event.preventDefault()
        if(event.keyCode === 13){
           this.props.editCategoria({
               id: this.state.editCategoria,
               categoria: this.refs['cat-'+ this.state.editCategoria].value
           })
           
           this.setState({
               editCategoria:''
           })
        }
       
    }

    editCategoria(categoria){
        this.setState({
            editCategoria: categoria.id
        })
    }

    cancelEditCategoria(){
        this.setState({
            editCategoria: ''
        })
    }

    render(){
        const {match, categorias} = this.props
        
    	return (        
            <div className='row'> 
                <div className='col-md-2'>
                    <h3>Categoria</h3>
                    <ul style={{ listStyle: 'none', padding: 0}}>
                        {categorias.map(this.renderCategoria)}
                    </ul>
                    <div className="well well-sm">
                        <input 
                            onKeyUp={this.handleNewCategoria}
                            className='form-control'
                            type='text' 
                            ref='categoria' 
                            placeholder="Nova categoria"/>
                    </div>
                    <Link to='/produtos/novo'>Novo Produto</Link>
                </div>
                
                <div className='col-md-10'>
                    <h1>Produtos</h1>
                    <Route exact path={match.url} component={ProdutosHome}/>
                    <Route exact path={match.url + '/novo'} render={ (props) => {
                           return <ProdutoNovo { ...props}
                                        categorias={categorias} 
                                        createProduto={this.props.createProduto} 
                                  />
                        }
                    }/>
                    <Route path={match.url + '/categoria/:catID'} 
                        render={(props) => {
                            return <Categoria {...props} 
                                    loadProdutosCategoria={this.props.loadProdutosCategoria}
                                    produtos={this.props.produtos}
                                    readCategoria={this.props.readCategoria}
                                    categoria={this.props.categoria}
                                    removeProduto={this.props.removeProduto}
                                   />

                            } 
                        } /> 
                </div>
            </div>  
        )  
    }
}

export default Produtos