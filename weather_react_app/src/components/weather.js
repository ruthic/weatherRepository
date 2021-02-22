import axios from 'axios';
import React, { useEffect, useState } from 'react';

export default function Weather(props) {

    // const [data, setData] = useState([{feels_like: '',
    //     humidity:'',
    //     pressure: '',
    //     temp: '',
    //     temp_max: '',
    //     temp_min: ''}]);
    const [data, setData] = useState([]);
    // sendNotificationHttp = () => {
    //     //     debugger;
    //     //     const data = { title: this.state.title, body: this.state.body }
    //     //     axios.post(`http://localhost:9000/tokens/sendNotification`, data)
    //     //         .then(response => {
    //     //             console.log(response.data);
    //     //         }).catch(err => {
    //     //             console.log("err ", err)
    //     //         })
    //     // }

    //     import { actions } from '../action';
    // import axios from 'axios';
    // import $ from 'jquery';


    // //9
    // export const userIdByEmail = ({ dispatch, getState }) => next => action => {

    //     if (action.type === 'USER_ID_BY_EMAIL') {
    //         axios.get('http://localhost:3000/register/userByEmail' + action.payload)
    //             .then(res => { dispatch(actions.getCommunity({ community: res.data })) });
    //     }

    //     return next(action);
    // }
    // התנתק לי הטלפון!!!!!!!!!!!!!11
    // הבנתחי

    useEffect(() => {
        // GET request using fetch inside useEffect React hook
        // axios.get("https://samples.openweathermap.org/data/2.5/forecast?id=524901&appid=b1b15e88fa797225412429c1c50c122a1" + action.payload)
        //             .then(res => { dispatch(actions.getCommunity({ community: res.data })) });

        // fetch("https://samples.openweathermap.org/data/2.5/forecast?id=524901&appid=b1b15e88fa797225412429c1c50c122a1"
        //     , {
        // mode: 'no-cors'
        // https://mybrowseraddon.com/access-control-allow-origin.html
        // credentials: 'include',
        // method: 'GET',
        // headers: {
        //     'Content-Type': 'application/json',
        //     'Accept': 'application/json',
        // 'Access-Control-Allow-Origin': '*',
        // "Access-Control-Allow-Credentials": true
        //     }

        // })
        // , {
        //     // mode: 'no-cors',
        //     headers: {
        //         'Content-Type': 'application/json',
        //         'Accept': 'application/json',
        //         'Access-Control-Allow-Origin':'*',
        //         "Access-Control-Allow-Credentials" : true 
        //     },

        // } )
        debugger;
        axios.get("http://api.openweathermap.org/data/2.5/weather?q=Jerusalem&appid=0e441ea5cb9dd1e94420476f803a1875"
            , {
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                    // 'Access-Control-Allow-Origin': '*',
                    // "Access-Control-Allow-Credentials": true
                }
            })
            // .then(response => response.json())
            .then(res => {
                // 1. Make a shallow copy of the items
                let items = [...data];
console.log(res);
console.log(items)
                // 2. Make a shallow copy of the item you want to mutate
                // let item = {...items[1]};
                let item = res.data
                // 3. Replace the property you're intested in
                // item.temperature = data.main.temp;

                // 4. Put it back into our array. N.B. we *are* mutating the array here, but that's why we made a copy first
                // items[1] = item;
                items[0] = item
                // 5. Set the state to our new copy
                setData({ items });
            })
            // .then(res => {
            //     debugger;
            //     console.log(res.data.main);
            //     console.log(res);
            //     // setData({data:res.data.main})
            //     // let newData={...data,res.data.main}
            //     // setData({data:res.data})
            //     setData(newData=>{data.concat(res.data)})

            //     console.log(data);
            //     console.log(data.main);
            //     // console.log(data.id);
            //     // console.log(data.name);
            // })
            .catch(error => {
                // this.setState({ errorMessage: error.toString() });
                console.error('There was an error!', error);
            });

        // empty dependency array means this effect will only run once (like componentDidMount in classes)
    }, []);
    return (
        <div>
            <div style={{ 'width': "25vw" }}>
                <select className="custom-select mr-sm-2" id="inlineFormCustomSelect">
                    <option defaultValue>Choose...</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                </select>
            </div>
            <h1>{data}</h1>
            <div>
                {/* {[].concat(data).map(weather => {

                    <div key={weather.id}>
                        <h3>Library Product of the Week!</h3>
                        <h4>{weather.name}</h4>
                        <h4>{weather.main.temp}</h4>
                        <h4>{weather.main.feels_like}</h4>
                        <h4>{weather.main.temp_min}</h4>
                        <h4>{weather.main.temp_max}</h4>
                        <h4>{weather.main.pressure}</h4>
                        <h4>{weather.main.humidity}</h4>
                    </div>

                })} */}
                {/* {Object.keys(data).forEach((key) => {

                    // <div key={product.name}>
                    // </div>
                    <div>
                        {key} : {data[key]}
                    </div>
                })} */}

            </div>
            {/* <ul>
                {Object.keys(data).forEach((key) => {
                    <li >{key} : {data[key]}</li>
                })}
            </ul> */}

            {/* <input
        id={field.name}
        className="form-control"
        type="text"
        placeholder={field.name}
        autocomplete="off"
        {...field} /> */}
        </div>
    )
}