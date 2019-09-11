import {SIGN_UP_FORM} from '../../constants'

const loginEmail = {
    controls: {
        email: {
            elementType: 'input',
            elementConfig: {
                type: 'email',
                placeholder: 'Mail Address'
            },
            value: '',
            validation: {
                required: true,
                isEmail: true
            },
            valid: false,
            touched: false
        },
        password: {
            elementType: 'input',
            elementConfig: {
                type: 'password',
                placeholder: 'Password'
            },
            value: '',
            validation: {
                required: true,
                minLength: 6
            },
            valid: false,
            touched: false
        },
    },
};

const signUp = {
    firstName: {
        elementType: 'input',
        elementConfig: {
            type: 'text',
            placeholder: 'First name'
        },
        value: '',
        validation: {
            required: false,
            isEmail: false
        },
        valid: false,
        touched: false
    },
    secondName: {
        elementType: 'input',
        elementConfig: {
            type: 'text',
            placeholder: 'Second name'
        },
        value: '',
        validation: {
            required: false,
            isEmail: false
        },
        valid: false,
        touched: false
    },
    phone: {
        elementType: 'input',
        elementConfig: {
            type: 'text',
            placeholder: 'Phone'
        },
        value: '',
        validation: {
            required: false,
            isEmail: false
        },
        valid: false,
        touched: false
    },
};

export const createConfig = (formType) => {
    let data = loginEmail;
    if(formType === SIGN_UP_FORM)
    {
       data = {controls: {...data.controls, ...signUp}}
    }
    return data;

};