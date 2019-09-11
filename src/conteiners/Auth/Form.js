import React, {Component} from 'react';
import {Redirect} from "react-router-dom";

import Input from '../../components/UI/Input';
import Button from '../../components/UI/Button';
import Spinner from '../../components/UI/Spinner';
import classes from './Auth.css';
import {isAuth} from "../../utility";
import {checkValidity} from "./util";

class Form extends Component {
    state = {...this.props.data};

    inputChangedHandler = (event, controlName) => {
        const updatedControls = {
            ...this.state.controls,
            [controlName]: {
                ...this.state.controls[controlName],
                value: event.target.value,
                valid: checkValidity(event.target.value, this.state.controls[controlName].validation),
                touched: true
            }
        };
        this.setState({controls: updatedControls});
    };
    submitHandler = (event) => {
        event.preventDefault();
        const temp = [];
        for (let item in this.state.controls) {
            temp.push(this.state.controls[item].value);
        }
        this.props.onAuth(...temp);
    };

    render() {
        if (isAuth(this.props.token)) {
            return <Redirect to={'/'}/>
        }
        const formElementsArray = [];

        for (let key in this.state.controls) {
            formElementsArray.push({
                id: key,
                config: this.state.controls[key]
            });
        }
        let formComponents = formElementsArray.map(formElement => (
            <Input
                key={formElement.id}
                elementType={formElement.config.elementType}
                elementConfig={formElement.config.elementConfig}
                value={formElement.config.value}
                invalid={!formElement.config.valid}
                shouldValidate={formElement.config.validation}
                touched={formElement.config.touched}
                changed={(event) => this.inputChangedHandler(event, formElement.id)}/>
        ));
        if (this.props.loading) {
            formComponents = <Spinner/>
        }
        let errorMessage = null;

        if (this.props.error) {
            errorMessage = (
                <p>{this.props.error.message}</p>
            );
        }
        return (
            <div className={classes.Auth}>
                {errorMessage}
                <form onSubmit={this.submitHandler}>
                    {formComponents}
                    <Button btnType="Success">SUBMIT</Button>
                </form>
            </div>
        );
    }
}
export default Form;