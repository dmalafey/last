import React from 'react';
import {NavLink} from "react-router-dom";
import {connect} from "react-redux";

import Form from "../Form";
import * as actions from "../../../store/actions";
import {createConfig} from "../form-params";
import classes from "../SignUp/style.module.css";


const SignIn = ({loading, error, token, onAuth}) => {
    return (
        <>
            <Form data={createConfig()} onAuth={onAuth} loading={loading} error={error} token={token}/>
            <NavLink className={classes.Button} exact={true} to={'/signup'}>{"sign up"}</NavLink>
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
        onAuth: (email, password) => dispatch(actions.signIn(email, password))
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(SignIn);

