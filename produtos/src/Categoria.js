import React, { Component } from 'react'

class Categoria extends Component{
     
    constructor(props){
        super(props)
        this.state = {
            produtos: [],
            categoria:{},
            id: null
        }
        this.loadData = this.loadData.bind(this)
    }

    componentDidMount(){
        this.loadData(this.props.match.params.catID)       
    }

    componentWillReceiveProps(newProps){
       if(newProps.match.params.catID !== this.state.id){
            this.loadData(newProps.match.params.catID)   
       }
    }

    loadData(id){
        this.setState({ id })
        this.props.loadProdutosCategoria(id)
        this.props.readCategoria(id)
        
    }
    
    renderProduto(produto){
        return (
            <p className='well' key={produto.id} >{produto.produto}</p>
        )
    }

    render(){
        return (<div>
                    <h2>Categoria {this.state.categoria.categoria}</h2>
                    {this.props.produtos.map(this.renderProduto)}                    
                </div>)
    }
}

export default Categoria