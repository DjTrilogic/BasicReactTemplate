const initialState = {
}

export default (state = initialState, action: { type: string, payload: any }) => {
    switch (action.type) {
        case "ACCOUNT_LOGIN":
            return { ...state, ...action.payload }

        default:
            return state
    }
}
