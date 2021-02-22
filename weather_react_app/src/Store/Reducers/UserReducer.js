import produce from "immer"
import createReducer from "./UtilReducer"
const initialState = {
    user: {
        name: "",
        password: "",
        email: "",
        _id: ""
    }
}

const user={
    setUserName(state,action){
        state.user.name=action.payload;

    },
}

export default produce((state,action)=>createReducer(state,action,user),initialState)
