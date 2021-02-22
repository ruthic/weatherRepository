import logo from './logo.svg';
import './App.css';
import Login from './components/login';
import Weather from './components/weather';
import SignUp from './components/signUp';
import DisplayForecast from './components/displayForecast';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import SearchesHistory from './components/searchesHistory';
import { Provider } from "react-redux";
import { createStore } from "redux";
import UserReducer from "./Store/Reducers/UserReducer"
const store = createStore(UserReducer);


function App() {
  return (
    <div className="App">
      <Router>
        <nav className="navbar navbar-dark bg-dark navbar navbar-expand-lg">
          <a className="navbar-brand" href="#">Weather</a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
            {/* <li className="nav-item active">
                <Link to="/" className="nav-link"> <span className="sr-only">(current)</span></Link>
          
              </li> */}
              <li className="nav-item active">
                <Link to="/login" className="nav-link">Login <span className="sr-only">(current)</span></Link>
                {/* <a className="nav-link" href="#">Home <span class="sr-only">(current)</span></a> */}
              </li>
              <li className="nav-item active">
                <Link to="/signUp" className="nav-link">Sign Up <span className="sr-only">(current)</span></Link>
                {/* <a className="nav-link" href="#">Home <span class="sr-only">(current)</span></a> */}
              </li>
              {/* <li className="nav-item active">
                <Link to="/weather" className="nav-link">Weather <span className="sr-only">(current)</span></Link>
              </li> */}
              {/* <li className="nav-item active">
                <Link to="/displayForecast" className="nav-link">Display Forecast <span className="sr-only">(current)</span></Link>
              </li> */}
              {/* <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  Dropdown
        </a>
                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <a className="dropdown-item" href="#">Action</a>
                  <a className="dropdown-item" href="#">Another action</a>
                  <div className="dropdown-divider"></div>
                  <a className="dropdown-item" href="#">Something else here</a>
                </div>
              </li> */}
              {/* <li className="nav-item">
                <a className="nav-link disabled" href="#">Disabled</a>
              </li> */}
            </ul>
            <form className="form-inline my-2 my-lg-0">
              <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
            </form>
          </div>
        </nav>
        <h1 style={{ "color": "grey" }}>Get weather forecast in your city </h1>
        <Switch>
          <Provider store={store}>
          <Route exact path="/">
            <Login></Login>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route path="/signUp">
            <SignUp></SignUp>
          </Route>
          {/* <Route path="/weather">
            <Weather></Weather>
          </Route> */}
          <Route path="/displayForecast">
            <DisplayForecast></DisplayForecast>
          </Route>
          <Route exact path="/searchesHistory">
            <SearchesHistory />
          </Route>
          {/* <Route exact path="/searchesHistory/:userId">
            <SearchesHistory />
          </Route> */}
        </Provider>
        </Switch>

      </Router>
    </div>
  );
}

export default App;
