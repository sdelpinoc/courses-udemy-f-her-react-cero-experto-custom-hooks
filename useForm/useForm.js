import { useState } from 'react';

export const useForm = (initialForm = {}) => {
    // console.log('initialForm: ', initialForm);

    const [formState, setFormState] = useState(initialForm);

    const onInputChange = ({ target }) => {
        console.log(target.value);
        console.log(target.name);
        const { name, value } = target;

        setFormState({
            ...formState,
            [name]: value
        });
    };

    const onFormReset = () => {
        // console.log(event);
        // console.log(initialForm);
        // const { username, email, password } = formState;
        // setFormState({
        //     username: '',
        //     email: '',
        //     password: ''
        // });

        setFormState(initialForm);
    };

    return {
        ...formState,
        formState,
        onInputChange,
        onFormReset
    };
}
