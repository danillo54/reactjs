import React from 'react'
import {connect} from 'react-redux'
import {loadData} from './actions'

export class Info extends React.Component{
    
    componentDidMount(){
        this.props.loadData()
    }

    render(){
        if(this.props.isFetching){
            return <span>Loading...</span>
        }
        if(this.props.error){
            return <span>Error: {JSON.stringify(this.props.err.status)} </span>
        }
        return <span>Info: {JSON.stringify(this.props.data)}</span>
        
    }
}


const mapStateToProps=(state) => {
    return {
        isFetching: state.isFetching ,
        data: state.data,
        error: state.error,
        err: state.err
    }
}

const mapDispatchtToProps=(dispatch) =>{
    return{
        loadData: () => dispatch(loadData())
    }
}

export default connect(mapStateToProps, mapDispatchtToProps)(Info)