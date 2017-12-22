import React from 'react'
import {connect} from 'react-redux'
import {loadDataUARequest} from './actions'

class UserAgent extends React.Component{
    render(){
        return (
            <p>User-Agent {this.props.data}
                { !this.props.isFetching && <button onClick={() => this.props.loadDataUARequest()}>Load</button>}
                { this.props.isFetching && <span>loading ... </span> }
            </p>
        )
    }
}

const mapStateToProps = (state) => {
    return  {
        isFetching: state.ua.isFetching,
        data : state.ua.data,
        error : state.ua.error
    }
}

const mapDispachToProps = (dispatch) => {
    return {
        loadDataUARequest: () => dispatch(loadDataUARequest())
    }
}

export default connect(mapStateToProps,mapDispachToProps) (UserAgent)