import { LoginResponse } from "../../api/loginServer";

export const login = (payload: LoginResponse) => {
    localStorage.setItem("loginResponse", JSON.stringify(payload));
    return ({
        type: "ACCOUNT_LOGIN",
        payload
    });
}

export const logout = () => {
    localStorage.clear();
    return ({
        type: "ACCOUNT_LOGOUT",
        payload: null as LoginResponse,
    });
}
