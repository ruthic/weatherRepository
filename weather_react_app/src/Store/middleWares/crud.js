export const  getUser1 = ({ dispatch, getState }) => next => action => {

    if (action.type === 'USER_ID_BY_EMAIL') {
        axios.get('http://localhost:8000/getUser' + action.payload)
            .then(res => { dispatch(actions.getUserById({ user: res.data })) });
    }

    return next(action);
}