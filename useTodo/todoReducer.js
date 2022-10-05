export const todoReducer = (initialState = [], action) => {
    switch (action.type) {
        case '[TODO] Add Todo':
            // type: '[[TODO] Add Todo]', payload: { id: 213, description: foo, done: false }
            return [action.payload, ...initialState];

        case '[TODO] Remove Todo':
            // type: '[[TODO] Remove Todo]', payload: id
            return initialState.filter(todo => todo.id !== action.payload);

        case '[TODO] Toggle Todo':
            return initialState.map(todo => {
                
                if (todo.id === action.payload) {
                    return {
                        ...todo,
                        done: !todo.done
                    };
                }

                return todo;
            });

        case '[TODO] Edit Todo':
            return initialState.map(todo => {
                
                if (todo.id === action.payload.id) {
                    return {
                        ...todo,
                        description: action.payload.description
                    };
                }

                return todo;
            });

        default:
            return initialState;
    }
};