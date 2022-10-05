// Only added for the testing
import fetch from 'cross-fetch';

import { useEffect, useState } from 'react';

export const useFetch = (url) => {

    const [state, setState] = useState({
        data: null,
        isLoading: true,
        hasError: null
    });

    const getFetch = async () => {

        try {
            setState({
                ...state,
                isLoading: true
            });

            const response = await fetch(url);
            const result = await response.json();
            // console.log(result);
    
            setState({
                data: result,
                isLoading: false,
                hasError: null
            });
            
        } catch (error) {
            console.log(error);
            setState({
                ...state,
                isLoading: true,
                hasError: error
            });
        }
    };

    useEffect(() => {
        getFetch();
    }, [url])

    return {
        data: state.data,
        isLoading: state.isLoading,
        hasError: state.hasError
    };
}
