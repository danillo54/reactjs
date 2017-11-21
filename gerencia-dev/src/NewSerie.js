import React, { Component } from 'react'
import {Redirect} from 'react-router-dom'
import api from './Api'

const status = {
    'watched': 'Assistido',
    'watching': 'Assistindo',
    'toWatch': 'Assistir'
}

class NewSeries extends Component {

    constructor(props){
        super(props)

        this.state = {
            genres: []
        }

        this.saveSerie = this.saveSerie.bind(this)
    }

    componentDidMount(){
        this.setState({isLoading : true})    
        
        api.loadGenres()
            .then( (res) =>{
                this.setState({
                  isLoading:false,
                  genres:res.data
                })
    
            })    
      }

      saveSerie(){
          const newSerie = {
              name: this.name.value,
              status: this.status.value,
              genre: this.genre.value,
              comments: this.comment.value
          }

          api.saveSeries(newSerie)
            .then( (res) => {
                this.setState({
                    redirect: 'series/'+this.genre.value
                })
            })
         
      }

    render() {
        return (
            <section className="intro-section">
                {
                    this.state.redirect && 
                    <Redirect to={this.state.redirect}/>
                }
                <div className='container'>
                <h1>Nova Série</h1>
                <form>     
                    <div className='form-group'>
                       <label htmlFor='name'>Nome</label>                                     
                       <input type='text' className='form-control' id="name" ref={(ref) => this.name = ref} /><br/>
                    </div>
                    Status:
                    <select id="status" className='form-control' ref={(ref) => this.status = ref}>
                        {Object
                            .keys(status)
                            .map( key => <option key={key} value={key}>{status[key]}</option>)}
                    </select><br/>
                    
                    Generos:
                    <select id="genre" className='form-control' ref={(ref) => this.genre = ref}>
                        {this.state.genres
                            .map( key => <option key={key} value={key}>{key}</option>)}
                    </select><br/>
                    
                    Comentários: <textarea id="comment" className='form-control' ref={(ref) => this.comment = ref} ></textarea><br/>
                    <button type="button" onClick={this.saveSerie}>Salvar</button>
                </form>
             </div>
            </section>
           
        )
    }
}

export default NewSeries