import React, { useState, useEffect } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { Button } from "@mui/material";
import { ErrorMessage, Field, Form, Formik } from 'formik';
import { TextFieldOutlined } from '../cmps/TextFieldOutlined';
import { onLogin, onSignup } from '../store/user.actions';

function _LoginSignup(props) {
    const { path } = props.match;

    useEffect(() => {
        setIsLogin(!!props.login || props.match.path === '/login')
    }, [props.match.path])

    const [isLogin, setIsLogin] = useState(!!props.login || path === '/login')

    const validate = (values, props) => {
        const errors = {};
        if (isLogin) {
            if (!values.username)
                errors.username = '*required';
            if (!values.password)
                errors.password = '*required';
        }
        else {
            if (!values.username)
                errors.username = '*required';
            if (!values.password)
                errors.password = '*required';
            if (!values.fullname)
                errors.fullname = '*required';
        }
        return errors;
    }

    const onSubmit = async (values, { setSubmitting }) => {
        let user;
        if (isLogin) {
            user = await props.onLogin(values)
            if (user) {
                setSubmitting(false);
                if (!path.includes('editor')) props.history.push('/dashboard');
            }
        }
        else {
            user = await props.onSignup(values)
            if (user) {
                setSubmitting(false);
                if (!path.includes('editor')) props.history.push('/dashboard');
            }
        }
        if (props.setIsLoggedIn) props.setIsLoggedIn()
    }

    const initialValues = {
        fullname: '',
        username: '',
        password: ''
    }

    return (
        <div className="login-signup flex direction-column align-center">
            <h1>{(isLogin) ? 'Login' : 'Signup'}</h1>
            <Formik
                initialValues={initialValues}
                validate={validate}
                onSubmit={onSubmit}
            >
                {({ isSubmitting }) => (
                    <Form>
                        {!isLogin && (
                            <div className="field">
                                <Field type="text" name="fullname" label="Fullname" as={TextFieldOutlined} />
                                <ErrorMessage className="error" name="fullname" component="div" />
                            </div>
                        )}
                        <div className="field">
                            < Field type="text" name="username" label="Username" as={TextFieldOutlined} />
                            <ErrorMessage className="error" name="username" component="div" />
                        </div>
                        <div className="field">
                            <Field type="password" name="password" label="Password" as={TextFieldOutlined} />
                            <ErrorMessage className="error" name="password" component="div" />
                        </div>

                        <div className="field flex justify-center">
                            <Button
                                className="action"
                                variant={'contained'}
                                color={'primary'}
                                type="submit"
                                disabled={isSubmitting}>
                                {(isLogin) ? 'Login' : 'Signup'}
                            </Button>
                        </div>
                    </Form>
                )}
            </Formik>
            {(isLogin) ?
                (<div className="signup" onClick={() => { setIsLogin(false) }}>
                    Don't have a Wixer account? {(!path.includes('editor')) ? <Link to='/signup'>Signup</Link> : <a onClick={() => { setIsLogin(false) }}>Signup</a>}
                </div>) :

                (<div className="login" onClick={() => { setIsLogin(true) }}>
                    Already have an account? {(!path.includes('editor')) ? <Link to='/login'>Login</Link> : <a onClick={() => { setIsLogin(true) }}>Login</a>}
                </div>)}
            <div style={{ cursor: 'pointer' }} onClick={async () => {
                const user = await props.onLogin({
                    username: 'demo',
                    password: 'demo'
                })
                if (!path.includes('editor')) props.history.push('/dashboard');
                if (props.setIsLoggedIn) props.setIsLoggedIn()
            }}>
                Login As Demo
            </div>
        </div >
    )
}

const mapDispatchToProps = {
    onLogin,
    onSignup
}

export const LoginSignup = connect(null, mapDispatchToProps)(withRouter(_LoginSignup))