import { LoginResponse } from '../../api/loginServer/api';

var storedResponse = localStorage.getItem("loginResponse");

export const initialState = {
    loginResponse: (storedResponse ? JSON.parse(storedResponse) : null) as LoginResponse,
}

export default (state = initialState, action: { type: string, payload: any }) => {
    switch (action.type) {
        case "ACCOUNT_LOGIN":
        case "ACCOUNT_LOGOUT":
            return { ...state, loginResponse: action.payload }

        default:
            return state
    }
}
