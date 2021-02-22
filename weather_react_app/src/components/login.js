import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react'
import { Redirect, useHistory } from 'react-router-dom';
import { getUser, getUser1 } from '../services/user';
import SearchesHistory from './searchesHistory';


export default function Login(props) {
    const userPasswordRef = useRef('');
    const userEmailRef = useRef('');
    const history = useHistory();
    const [data, setData] = useState({})

    const loginUser = async (e) => {
        debugger;
        e.preventDefault();
        if (userPasswordRef.current.value !== '' && userEmailRef.current.value !== '') {
            debugger
            await getUser({ password: userPasswordRef.current.value, email: userEmailRef.current.value })
                .then(res => {
                    console.log(res)
                    setData({ res });
                    history.push('/displayForecast')
                })
                .catch((e) => { console.log(e) })
        }
        else {
            console.log("must enter a value")
        }
    }
    return (
        <div>
            <h1>Login</h1>
            <div style={{ "width": '30vw', "marginLeft": "35vw" }} >
                {/* <form className="px-4 py-3" > */}
                <div className="form-group">
                    <label htmlFor="exampleDropdownFormEmail1">Email address</label>
                    <input type="email" ref={userEmailRef} className="form-control" id="exampleDropdownFormEmail1" placeholder="email@example.com"></input>
                </div>
                <div className="form-group">
                    <label htmlFor="exampleDropdownFormPassword1">Password</label>
                    <input type="password" ref={userPasswordRef} className="form-control" id="exampleDropdownFormPassword1" placeholder="Password" ></input>
                </div>
                <div className="form-check">
                    <input type="checkbox" className="form-check-input" id="dropdownCheck"></input>
                    <label className="form-check-label" htmlFor="dropdownCheck">  </label>
                            Remember me
                    </div>
                <button onClick={loginUser} className="btn btn-info">Login</button>
                {/* <button type="button" class="btn btn-secondary btn-lg btn-block">Block level button</button> */}
                {/* </form> */}
                <div className="dropdown-divider"></div>
                <button className="dropdown-item" onClick={() => history.push("/signUp")}>New around here? Sign up</button>

            </div>
        </div>
    )


}