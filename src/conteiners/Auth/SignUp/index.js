import React from 'react';
import {NavLink} from "react-router-dom";
import {connect} from "react-redux";

import Form from "../Form";
import * as actions from "../../../store/actions";
import {createConfig} from "../form-params";
import {SIGN_UP_FORM} from '../../../constants'
import classes from './style.module.css';

const SignUp = ({loading, error, token, onAuth}) => {
    return (
        <>
            <Form data={createConfig(SIGN_UP_FORM)}
                  onAuth={onAuth}
                  loading={loading}
                  error={error}
                  token={token}/>
            <NavLink className={classes.Button} exact={true} to={'/signin'}>{"sign in"}</NavLink>
        </>
    )
};

const mapStateToProps = state => {
    return {
        loading: state.auth.loading,
        error: state.auth.error,
        token: state.auth.token
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onAuth: (...rest) => {
            console.log(rest)
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);