import React, { useRef, useState } from 'react'
import { useHistory } from 'react-router-dom';
import { addUser } from '../services/user'
export default function SignUp(props) {
    const userNameRef = useRef('');
    const userPasswordRef = useRef('');
    const userEmailRef = useRef('');
    const history = useHistory();
    const [data, setData] = useState({})

    const signUpUser =async (e) => {
        e.preventDefault();
        debugger;
        if (userNameRef.current.value !== '' && userPasswordRef.current.value !== '' && userEmailRef.current.value !== '') {
        //    if(addUser({ name: userNameRef.current.value, password: userPasswordRef.current.value, email: userEmailRef.current.value })) {
        //     debugger
        //     history.push('/displayForecast')
        //    }
           await addUser({ name: userNameRef.current.value, password: userPasswordRef.current.value, email: userEmailRef.current.value })
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
            <h1>Sign Up</h1>
            <div style={{ "width": '30vw', "marginLeft": "35vw" }} >
                {/* <form className="px-4 py-3" > */}
                    <div className="form-group">
                        <label htmlFor="exampleDropdownFormName1">Name</label>
                        <input type="name" ref={userNameRef} className="form-control" id="exampleDropdownFormName1" placeholder="Name" ></input>
                    </div>
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
                    <button  onClick={signUpUser} className="btn btn-info">Sign Up</button>
                    {/* <button type="button" class="btn btn-secondary btn-lg btn-block">Block level button</button> */}
                {/* </form> */}
                <div className="dropdown-divider"></div>
            </div>
        </div>
    )


}