import { userService } from "../services/user.service.js";
// import { showErrorMsg } from '../services/event-bus.service.js'

export function setUser(user) {
    return (dispatch) =>
        dispatch({
            type: 'SET_USER',
            user
        })
}

export function onLogin(credentials) {
    return async (dispatch) => {
        try {
            const user = await userService.login(credentials)
            dispatch({
                type: 'SET_USER',
                user
            });
            return user;
        } catch (err) {
            // showErrorMsg('Cannot login')
            console.log('Cannot login', err);
        }
    }
}


export function onSignup(credentials) {
    return async (dispatch) => {
        try {
            const user = await userService.signup(credentials);
            dispatch({
                type: 'SET_USER',
                user
            });
            return user;
        } catch(err) {
            console.log('Cannot signup', err);
        }
    }
}

export function onLogout() {
    return (dispatch) => {
        userService.logout()
            .then(() => dispatch({
                type: 'SET_USER',
                user: null
            }))
            .catch(err => {
                // showErrorMsg('Cannot logout')
                console.log('Cannot logout', err)
            })
    }
}

