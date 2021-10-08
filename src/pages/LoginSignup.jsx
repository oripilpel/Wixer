import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Button } from "@mui/material";
import { ErrorMessage, Field, Form, Formik } from 'formik';
import { TextFieldOutlined } from '../cmps/TextFieldOutlined';
import { onLogin, onSignup } from '../store/user.actions';

function _LoginSignup(props) {

    const path = props.match.path;

    const validate = (values, props) => {
        const errors = {};
        switch (path) {
            case '/login':
                if (!values.username)
                    errors.username = 'Required';
                if (!values.password)
                    errors.password = 'Required';
                break;
            default:
                if (!values.username)
                    errors.username = 'Required';
                if (!values.password)
                    errors.password = 'Required';
                if (!values.fullname)
                    errors.fullname = 'Required';
        }
        return errors;
    }

    const onSubmit = async (values, { setSubmitting }) => {
        let user;
        switch (path) {
            case '/login':
                user = await props.onLogin(values)
                if (user) {
                    setSubmitting(false);
                    props.history.push('/');
                }
                break;
            default:
                user = await props.onSignup(values)
                if (user) {
                    setSubmitting(false);
                    props.history.push('/');
                }

        }
    }

    const initialValues = {
        fullname: '',
        username: '',
        password: ''
    }

    return (
        <div className="login-signup flex direction-column align-center">
            <h1>{path === '/login' ? 'Login' : 'Signup'}</h1>
            <Formik
                initialValues={initialValues}
                validate={validate}
                onSubmit={onSubmit}
            >
                {({ isSubmitting }) => (
                    <Form>
                        {path === '/signup' && (
                            <div className="field">
                                <Field type="text" name="fullname" label="fullname" as={TextFieldOutlined} />
                                <ErrorMessage name="fullname" component="div" />
                            </div>
                        )}
                        <div className="field">
                            < Field type="text" name="username" label="username" as={TextFieldOutlined} />
                            <ErrorMessage name="username" component="div" />
                        </div>
                        <div className="field">
                            <Field type="password" name="password" label="password" as={TextFieldOutlined} />
                            <ErrorMessage name="password" component="div" />
                        </div>
                        <div className="field flex justify-center">
                            <Button
                                variant={'contained'}
                                color={'primary'}
                                type="submit"
                                disabled={isSubmitting}>
                                {path === '/login' ? 'Login' : 'Signup'}
                            </Button>
                        </div>
                    </Form>
                )}
            </Formik>
            <Link to={path === '/login' ? '/signup' : '/login'}>{path === '/login' ? 'Signup' : 'Login'}</Link>
        </div>
    )
}

const mapDispatchToProps = {
    onLogin,
    onSignup
}

export const LoginSignup = connect(null, mapDispatchToProps)(_LoginSignup)