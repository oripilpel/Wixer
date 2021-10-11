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
                    errors.username = '*required';
                if (!values.password)
                    errors.password = '*required';
                break;
            default:
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
        switch (path) {
            case '/login':
                user = await props.onLogin(values)
                if (user) {
                    setSubmitting(false);
                    props.history.push('/dashboard');
                }
                break;
            default:
                user = await props.onSignup(values)
                if (user) {
                    setSubmitting(false);
                    props.history.push('/dashboard');
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
                                {path === '/login' ? 'Login' : 'Signup'}
                            </Button>
                        </div>
                    </Form>
                )}
            </Formik>
            {path === '/login' ?
                (<div className="signup">
                    Don't have a Wixer account? <Link to='/signup'>Signup</Link>
                </div>) :

                (<div className="login">
                    Already have an account? <Link to='/login'>Login</Link>
                </div>)}
            <div style={{ cursor: 'pointer' }} onClick={async () => {
                const user = await props.onLogin({
                    username: 'demo',
                    password: 'demo'
                })
                if (user) {
                    props.history.push('/dashboard');
                }
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

export const LoginSignup = connect(null, mapDispatchToProps)(_LoginSignup)