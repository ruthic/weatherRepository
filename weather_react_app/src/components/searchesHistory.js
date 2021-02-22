import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { getAllSearches } from '../services/search';

export default function SearchesHistory(props) {
    // const userId = useParams("")
    // console.log("user id" + userId)
    const [data, setData] = useState({
        dt: "",
        timezone: "",
        temperature: "",
        city: "",
        country: "",
        pressure: "",
        humidity: "",
        description: "",
        rain: "",
        main: "Drizzle",
        icon: "09d",
        error: ""
    })
    const [isLoading, setLoading] = useState(false);
    const [searchesHistoryList, setSearchesHistoryList] = useState([{ city: "Bnei Brak", dt: "dt" }, { city: "Jrusalem", dt: "dt" }])
    const [searchesListWithData, setSearchesListWithData] = useState([])
    // const {user}=props.user;
    const [userId, setUserId] = useState("602f30bdc47da5158c94de54");
    useEffect(() => {
        // if (getAllSearches({userId}));
        // console.log("OK")
        // searchesHistoryList.map((search) => {
        //     getCityWeather(search.city)
        // }
        // )

    getAllSearches(userId).then(res=>{
        debugger
        console.log(res)
    })

  // http://history.openweathermap.org/data/2.5/history/city?q=London,UK&appid={API key}
    }, []);

    // const getCityWeather = ((city) => {
    //     axios.get(`http://history.openweathermap.org/data/2.5/history/city?q=${city}&appid=0e441ea5cb9dd1e94420476f803a1875`
    //     )
    //         .then(res => {
    //             setData({
    //                 // dt: new SimpleDateFormat("H:mm  dd MMM yy").format(new Date(res.data.dt * 1000)),
    //                 dt: (new Date(res.data.dt * 1000 + (res.data.timezone * 1000))).toString(),
    //                 temperature: Math.floor((res.data.main.temp - 273.15)) + "C",
    //                 city: res.data.name,
    //                 icon: res.data.weather[0].icon,
    //                 rain: res.data.rain,
    //                 pressure: res.data.main.pressure,
    //                 humidity: res.data.main.humidity + "%",
    //                 description: res.data.weather[0].description,
    //                 country: res.data.sys.country,
    //                 error: ""

    //             })
    //             searchesListWithData.concat(data);
    //             setLoading(true)
    //             console.log(data)
    //         })
    //         .catch(error => {
    //             console.error('There was an error!', error);
    //         })
    //         .finally(() => setLoading(false));
    // })
    return (
        <div>
            <div>
                <h1>History</h1>
            </div>
            <div>
                {
                    searchesHistoryList.map((weather, index) =>
                        <h3 key={index}>
                            {index}- {weather.dt}, {weather.city}
                        </h3>)

                }
            </div>
            <div style={{ "backgroundColor": "gray", "width": "40vw" }}>
                {searchesHistoryList.map((data, index) => {
                    { console.log(data.city, data.dt) }
                    <div key={index}>
                        <p>{data.city}</p>
                        <p>{data.dt}</p>
                        <h3> temperature - {data.temperature}</h3>
                                <h3>humidity - {data.humidity}</h3>
                                <h3>{data.city}, {data.country}</h3>
                                <h3>pressure - {data.pressure}</h3>
                                {/* <h3>rain - {data.rain}</h3> */}
                                <img className="img-fluid" alt="Responsive image" style={{ "width": "8vw" }} src={`http://openweathermap.org/img/w/${data.icon}.png`} />
                    </div>
                })}
            </div>
            <div>
            {searchesListWithData.map((serach, index) => {
                    { console.log(serach.city, serach.dt) }
                    <div key={index}>
                        <p>{serach.city}</p>
                        <p>{serach.dt}</p>
                    </div>
                })}
            </div>

        </div>
    )
}