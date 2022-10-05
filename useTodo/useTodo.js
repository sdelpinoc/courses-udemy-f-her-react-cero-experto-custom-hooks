import { useReducer, useEffect, useState } from 'react';

import { todoReducer } from './todoReducer';

const init = () => {
    return JSON.parse(localStorage.getItem('todos')) || [];
};

export const useTodo = () => {
    // First useState and then useReducer
    const [todosPending, setTodosPending] = useState(0);
    const [todosTotal, setTodosTotal] = useState(0);

    const [todos, dispatch] = useReducer(todoReducer, [], init);

    useEffect(() => {
        // console.log('useEffect');
        localStorage.setItem('todos', JSON.stringify(todos));
        setTodosPending(getPending());
        setTodosTotal(todos.length);
    }, [todos]);

    const handledAddTodo = todo => {
        // console.log(todo);
        const action = {
            type: '[TODO] Add Todo',
            payload: todo
        };

        dispatch(action);
    };

    const handledDeleteTodo = id => {
        const action = {
            type: '[TODO] Remove Todo',
            payload: id
        };

        dispatch(action);
    };
    
    const handledToggleTodo = id => {
        // console.log({id});
        const action = {
            type: '[TODO] Toggle Todo',
            payload: id
        };
    
        dispatch(action);
    };
    
    // const handledEditTodo = ({id, description}) => {
    //     const action = {
    //         type: '[TODO] Edit Todo',
    //         payload: {
    //             id,
    //             description
    //         }
    //     };

    //     dispatch(action);
    // };

    const getPending = () => {
        const total = todos.reduce((accumulator, currentValue) => {
            // console.log('accumulator: ', accumulator);
            // console.log('currentValue: ', currentValue);
            return accumulator + ((!currentValue.done) ? 1 : 0);
        }, 0);

        // console.log('getPending - total: ', total);

        return total;
    };

    return {
        todos,
        handledAddTodo,
        handledDeleteTodo,
        handledToggleTodo,
        // handledEditTodo,
        todosPending,
        todosTotal
    };
}
