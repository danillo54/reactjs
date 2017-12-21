import React from 'react'
import {connect} from 'react-redux'
import {loadUA} from './actions'

export class UserAgent extends React.Component{
    
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
        return <span>UserAgent: {JSON.stringify(this.props.data)}</span>
        
    }
}


const mapStateToProps=(state) => {
    return {
        isFetching: state.ua.isFetching ,
        data: state.ua.data,
        error: state.ua.error,
        err: state.ua.err
    }
}

const mapDispatchtToProps=(dispatch) =>{
    return{
        loadData: () => dispatch(loadUA())
    }
}

export default connect(mapStateToProps, mapDispatchtToProps)(UserAgent)