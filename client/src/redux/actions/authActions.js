import { AUTHORIZE, TOGGLE_LOGIN, TOGGLE_MODAL } from '../types'

export const toggleModal = () =>{
    return {
        type: TOGGLE_MODAL
    }
}

export const toggleLogin = () =>{
    return {
        type: TOGGLE_LOGIN
    }
}

export const authorize = (auth) =>{
    return {
        type : AUTHORIZE,
        payload: auth
    }
}
