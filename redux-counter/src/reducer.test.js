import reducer from './reducer'

test('reducer initital undefined',() =>{   
    const action = {type:'INCREMENT',value: 10}
    const state = reducer(undefined,action)
    expect(state).toEqual({count: 10})
})

test('reducer increment',() =>{
    const initialState = {
        count: 10
    }
    const action = {type:'INCREMENT',value: 10}
    const state = reducer(initialState,action)
    expect(state).toEqual({count: 20})
})

test('reducer decrement',() =>{
    const initialState = {
        count: 10
    }
    const action = {type:'DECREMENT',value: 10}
    const state = reducer(initialState,action)
    expect(state).toEqual({count: 0})
})