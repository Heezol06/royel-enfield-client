import Footer from './component/Footer/Footer';
import Headers from './component/Home/Headers/Headers';
import Home from './component/Home/Home/Home';
import Login from './component/Login/Login';
import Register from './component/Login/Register/Register';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import AuthProvider from './component/Context/AuthProvider';
import Bikes from './component/Bikes/Bikes';
import BikeDetails from './component/BikeDetails/BikeDetails';
import Review from './component/Review/Review';
import MyOrder from './component/MyOrder/MyOrder';
import PrivetRoute from './component/PrivetRoute/PrivetRoute';
import Dashboard from './component/Dashboard/Dashboard';

function App() {
  return (
    <div className="App">
     <AuthProvider>
     <Router>
          <Headers></Headers>
        <Switch>
        <Route exact path="/">
        <Home></Home>
        </Route>
        <Route path="/home">
            <Home />
          </Route>
        <Route path="/bikes">
            <Bikes></Bikes>
          </Route>
        <Route path="/review">
            <Review></Review>
          </Route>
        <PrivetRoute path="/dashboard">
            <Dashboard></Dashboard>
          </PrivetRoute>
        <PrivetRoute path="/myOrder">
            <MyOrder></MyOrder>
          </PrivetRoute>
        <PrivetRoute path="/bikeDetails/:bikeId">
            <BikeDetails></BikeDetails>
          </PrivetRoute>
          <Route path="/login">
            <Login/> 
          </Route>
          <Route path="/register">
            <Register/> 
          </Route>
        </Switch>
              <Footer></Footer>
      </Router>
     </AuthProvider>
    </div>
  );
}

export default App;
