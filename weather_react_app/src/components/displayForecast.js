import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Select from 'react-select';
import groupedCitiesOptions from '../data';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import SearchesHistory from './searchesHistory';
import { addSearch } from '../services/search';

const groupStyles = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
};
const groupBadgeStyles = {
    backgroundColor: '#EBECF0',
    borderRadius: '2em',
    color: '#172B4D',
    display: 'inline-block',
    fontSize: 12,
    fontWeight: 'normal',
    lineHeight: '1',
    minWidth: 1,
    padding: '0.16666666666667em 0.5em',
    textAlign: 'center',
};

const formatGroupLabel = data => (
    <div style={groupStyles}>
        <span>{data.label}</span>
        <span style={groupBadgeStyles}>{data.options.length}</span>
    </div>
);
export default function DisplayForecast(props) {
    const [groupedOptions, setGroupedOptions] = useState([ { value: '', label: '' }])
    const [colourOptions, setcolourOptions] = useState([""])
    const [data, setData] = useState({
        dt: "",
        temperature: "",
        city: "",
        country: "",
        humidity: "",
        description: "",
        icon: "09d",
        user: "602f30bdc47da5158c94de54",
    }
    )
    const [isLoading, setLoading] = useState(false);
    const [selectedOption, setSelectedOption] = useState(null)
    const [userId, setUserId] = useState("602f30bdc47da5158c94de54");
    useEffect(() => {
        let citiesLit = [{ value: "", label: "" }];
        groupedCitiesOptions.map((obj) => {
            citiesLit.push({ value: obj.name, label: obj.name })
        })
        setGroupedOptions(citiesLit)
    }, []);
    console.log(groupedOptions);
    const getCityWeather = ((city) => {
        axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=0e441ea5cb9dd1e94420476f803a1875`
        )
            .then(res => {
                debugger
                console.log(new Date(res.dt * 1000 - (res.timezone * 1000))); // minus 
                console.log(new Date(res.dt * 1000 + (res.timezone * 1000))); // plus
                setData({
                    // dt: new SimpleDateFormat("H:mm  dd MMM yy").format(new Date(res.data.dt * 1000)),
                    dt: (new Date(res.data.dt * 1000 - (res.data.timezone * 1000))).toString(),
                    temperature: Math.floor((res.data.main.temp - 273.15)) + "C",
                    city: res.data.name,
                    icon: res.data.weather[0].icon,
                    humidity: res.data.main.humidity + "%",
                    description: res.data.weather[0].description,
                    country: res.data.sys.country,
                    error: ""
                })
                const Search = addSearch(data).then(res => {
                    debugger
                    console.log(res)
                })
                setLoading(true)
                console.log(data)
            })
            .catch(error => {
                console.error('There was an error!', error);
            })
            .finally(() => setLoading(false));
    })

    const handleChange = (selectedOption) => {
        debugger
        setSelectedOption(selectedOption.value);
        // console.log(`Option selected:`, selectedOption);
        getCityWeather(selectedOption.value)
    };

    return (
        <div>
            <div style={{ "margin": "1vw" }}>
                <Link className="btn btn-info" to="/searchesHistory"> searches History</Link>
                <Route path="/searchesHistory">
                    <SearchesHistory />
                </Route>
            </div>
            <div style={{ 'backgroundColor': "#17a2b8", "height": "25vh" }}>
                <div style={{ "width": '30vw', "marginLeft": "35vw", "paddingTop": "10vh" }}>
                    <Select
                        // defaultValue={colourOptions[1]}
                        options={groupedOptions}
                        formatGroupLabel={formatGroupLabel}
                        value={selectedOption}
                        onChange={handleChange} />
                </div>
                <h1>{selectedOption}</h1>
            </div>
            <ul>
                {groupedCitiesOptions.map((city) => {
                    <li key={city.id}>
                        city: {city.name}</li>
                })}
            </ul>
            {console.log(data)}
            {/* <h1>{data[0].data.name}</h1> */}
            <div className="card" >
                <div className="card-body">
                    <div>
                        {selectedOption !== null ?
                            <div>
                                <h3>{data.city}, {data.country}</h3>
                                <div style={{ "width": "70vw", 'display': 'inline' }}>
                                    <div>
                                        <h3>temperature  {data.temperature}</h3>
                                        <h3>humidity  {data.humidity}</h3>
                                    </div>
                                    <div>
                                        <h3>{data.description}       
                                        <img className="img-fluid" alt="Responsive image" style={{ "width": "6vw" }} src={`http://openweathermap.org/img/w/${data.icon}.png`} />
                                        </h3>
                                    </div>
                                </div>
                                {/* <h3>rain - {data.rain}</h3> */}
                                <h3>{data.dt}</h3>
                            </div> : ""}
                    </div>
                </div>
            </div>
        </div>
    )
}