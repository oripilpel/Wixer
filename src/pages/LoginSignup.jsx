import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Button } from '@material-ui/core';
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

    console.log(props);
    return (
        <>
            <h1>{path === '/login' ? 'Login' : 'Signup'}</h1>
            <Formik
                initialValues={initialValues}
                validate={validate}
                onSubmit={onSubmit}
            >
                {({ isSubmitting }) => (
                    <Form>
                        {path === '/signup' && (
                            <>
                                <Field type="text" name="fullname" label="fullname" as={TextFieldOutlined} />
                                <ErrorMessage name="fullname" component="div" />
                            </>
                        )}
                        < Field type="text" name="username" label="username" as={TextFieldOutlined} />
                        <ErrorMessage name="username" component="div" />
                        <Field type="text" name="password" label="password" as={TextFieldOutlined} />
                        <ErrorMessage name="password" component="div" />
                        <Button
                            variant={'contained'}
                            color={'primary'}
                            type="submit"
                            disabled={isSubmitting}>
                            {path === '/login' ? 'Login' : 'Signup'}
                        </Button>
                    </Form>
                )}
            </Formik>
            <Link to={path === '/login' ? '/signup' : '/login'}>{path === '/login' ? 'Signup' : 'Login'}</Link>
        </>
    )
}

const mapDispatchToProps = {
    onLogin,
    onSignup
}

export const LoginSignup = connect(null, mapDispatchToProps)(_LoginSignup)