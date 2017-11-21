import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'

import HeaderInterno from './HeaderInterno'

import base, { storage } from './base'

class NovoAnuncio extends Component {
    constructor(props) {
        super(props)
        this.state = {
            success: false
        }
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleSubmit(e) {

        const file = this.foto.files[0]
        const { name } = file
        const ref = storage.ref(name)

        ref
            .put(file)
            .then(img => {

                const novoAnuncio = {
                    nome: this.nome.value,
                    descricao: this.descricao.value,
                    preco: this.preco.value,
                    vendedor: this.vendedor.value,
                    foto: img.metadata.downloadURLs[0],
                    telefone: this.telefone.value,
                    categoria: this.categoria.value

                }

                base.push('anuncios', {
                    data: novoAnuncio
                })
                    .then(() => {
                        this.setState({ success: true })
                    })



            }).catch(e => console.log(e))


        e.preventDefault();
    }

    render() {
        if (this.state.success) {
            return <Redirect to='/' />
        }

        return (
            <div>
                <HeaderInterno />
                <div className='container' style={{ paddingTop: '120px' }}>

                    <h1>Novo anúncio</h1>
                    <form onSubmit={this.handleSubmit}>
                        <div className='form-group'>
                            <label htmlFor='foto'>Foto</label>
                            <input type='file' className='form-control' id="foto" ref={(ref) => this.foto = ref} />
                        </div>
                        <div className='form-group'>
                            <label htmlFor='categoria'>Categoria</label>
                            <select className='form-control' id="categoria" ref={(ref) => this.categoria = ref} >
                                {this.props.categorias.map(cat =>
                                    <option key={cat.url} value={cat.url}>{cat.categoria}</option>
                                )}
                            </select>
                        </div>
                        <div className='form-group'>
                            <label htmlFor='nome'>Nome</label>
                            <input type='text' className='form-control' id="nome" ref={(ref) => this.nome = ref} />
                        </div>
                        <div className='form-group'>
                            <label htmlFor='descricao'>Descrição</label>
                            <input type='text' className='form-control' id="descricao" ref={(ref) => this.descricao = ref} />
                        </div>
                        <div className='form-group'>
                            <label htmlFor='preco'>Preço</label>
                            <input type='text' className='form-control' id="preco" ref={(ref) => this.preco = ref} />
                        </div>
                        <div className='form-group'>
                            <label htmlFor='telefone'>Telefone</label>
                            <input type='text' className='form-control' id="telefone" ref={(ref) => this.telefone = ref} />
                        </div>
                        <div className='form-group'>
                            <label htmlFor='vendedor'>Vendedor</label>
                            <input type='text' className='form-control' id="vendedor" ref={(ref) => this.vendedor = ref} />
                        </div>
                        <button type='submit' className='btn btn-primary'>Salvar Anúncio</button>
                    </form>
                </div>

            </div>

        )
    }

}

export default NovoAnuncio