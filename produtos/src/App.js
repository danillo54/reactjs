import React, { Component } from 'react';

import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

import Home from './Home'
import Produtos from './Produtos'
import Sobre from './Sobre'

class App extends Component {

  constructor(props){
    super(props)

    this.loadCategorias = this.loadCategorias.bind(this)
    this.createCategoria =this.createCategoria.bind(this)
    this.removeCategoria =this.removeCategoria.bind(this)
    this.editCategoria = this.editCategoria.bind(this)

    this.createProduto = this.createProduto.bind(this)
    this.loadProdutosCategoria = this.loadProdutosCategoria.bind(this)
    this.readCategoria = this.readCategoria.bind(this)
    this.removeProduto = this.removeProduto.bind(this)

    this.state = {
      categorias:[],
      produtos:[],
      categoria:null
    }
  }

  loadCategorias(){
    this.props.api.loadCategorias()
         .then(res => {
             this.setState( {
                 categorias : res.data
             } )
         
         })
  }

  createCategoria(categoria){
    this.props.api.createCategoria(categoria)
      .then(() => {       
        this.loadCategorias()            
    })
  }

  editCategoria(categoria){
    this.props.api.editCategoria(categoria)
      .then(() => {       
        this.loadCategorias()            
    })
  }

  removeCategoria(categoria){
    this.props.api.deleteCategoria(categoria.id)
        .then(() =>{
            this.loadCategorias()
        })
  }

  createProduto(produto){
    return this.props.api.createProduto(produto)      
  }

  loadProdutosCategoria(categoria){
      this.props.api.loadProdutosCategoria(categoria)
        .then((res) => {
            this.setState({
                produtos: res.data
            })
        })
  }

  readCategoria(id){
    this.props.api.readCategoria(id)
      .then( (res) => {
          this.setState({
            categoria: res.data
          })
      })

  }

  removeProduto(produto){
    this.props.api.deleteProduto(produto.id)
      // .then( (res) =>{
      //   this.setState({
          
      //   })
      // })
  }

  render() {
    return (
      <Router>
      <div >
        <nav className="navbar navbar-inverse">
          <div className='container'>
            <div className='navbar-header'>
              <a href='/' className='navbar-brand'>
                Gerenciador de Produtos
              </a>
            </div>
            <ul className='nav navbar-nav'>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/produtos">Produtos</Link></li>
              <li><Link to="/sobre">Sobre</Link></li>
            </ul>
          </div>
        </nav>
        <div className="container">
          <Route exact path='/' component={Home}/>
          <Route path='/produtos' render={(props) => {
             return (<Produtos {...props} 
                    loadCategorias={this.loadCategorias}
                    removeCategoria ={this.removeCategoria}
                    editCategoria = {this.editCategoria}
                    createCategoria ={ this.createCategoria }
                    categorias={this.state.categorias}

                    produtos={this.state.produtos}
                    categoria={this.state.categoria}
                    loadProdutosCategoria={this.loadProdutosCategoria}
                    readCategoria={this.readCategoria}
                    createProduto={this.createProduto}
                    removeProduto={this.removeProduto}
                    />) }
          }/>
          <Route exact path='/sobre' component={Sobre}/>
        </div>
      </div>
      </Router>
    )
  }
}

export default App
