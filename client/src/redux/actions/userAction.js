import { GET_USER, TOGGLE_PROFILE, TOGGLE_PASSWORD, TOGGLE_DELETE } from '../types'

export const getuser = (user) =>{
    return {
        type: GET_USER,
        payload: user
    }
}

export const toggleProfile = () =>{
    return {
        type: TOGGLE_PROFILE
    }
}

export const togglePassword = () =>{
    return {
        type: TOGGLE_PASSWORD
    }
}

export const toggleDelete = () =>{
    return {
        type: TOGGLE_DELETE
    }
}
