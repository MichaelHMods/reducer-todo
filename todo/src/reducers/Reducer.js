export const initialState = {
    item: 'Learn about reducers',
    completed: false,
    id: Date.now(),
}; 

export const reducer = (state, action) => {
    switch(action.type) {
        case 'SET_TODO':
            const newTodo = {
                ...state, 
                title: action.payload,
                completed: false,
                id: Date.now(),
            }
        case 'MARK_COMPLETE' 
            
    }
    
    default:
      return state;
}

