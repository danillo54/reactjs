export const loadDataRequest = () => {
    return {
        type: 'LOAD_DATA_REQUEST'
    }
}

export const loadDataSuccess = (data) => {
    return {
        type: 'LOAD_DATA_SUCCESS',
        data
    }
}

export const loadDataError = () =>{
    return {
        type: 'LOAD_DATA_ERROR'
    }
}

export const loadDataUARequest = () => {
    return {
        type: 'LOAD_DATA_UA_REQUEST'
    }
}

export const loadDataUASuccess = (data) => {
    // console.log(data)
    return {
        type: 'LOAD_DATA_UA_SUCCESS',
        data
    }
}

export const loadDataUAError = () =>{
    return {
        type: 'LOAD_DATA_UA_ERROR'
    }
}