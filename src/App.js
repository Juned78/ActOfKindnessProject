import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import ContactUs from './component/ContactUs';
import AboutUs from './component/AboutUs';
import SignUp from './component/SignUp';
import Admin from './component/Admin';
import Supervisor from './component/WorkerEdit';
import User from './component/User';
import { useSelector } from 'react-redux';
import Donateother from './component/Donateother';
import DonateMoney from './component/DonateMoney';
import MoneyTransfer from './component/MoneyTransfer';
import AdminOperation from './component/AdminOperation';
import ManagerOperation from './component/ManagerOperation';
import AdminRegister from './component/AdminRegister';
import AdminAddManager from './component/AdminAddManager';
import AdminEdit from './component/AdminEdit';
import AdminDeleteManager from './component/AdminDeleteManager';
import ManagerAddWorker from './component/ManagerAddWorker';
import ManagerEdit from './component/ManagerEdit';
import ManagerDeleteWorker from './component/ManagerDeleteWorker';
import Login from './component/Login';
import Navbar1 from './component/Navbar1';
import Navbar from './component/Navbar';
import Home from './component/Home';
import ForgetPassword from './component/ForgetPassword';
import Otp from './component/Otp';
import ChangePassword from './component/ChangePassword';
import DonarsList from './component/DonarsList';
function App() {

  const userSignIn = useSelector((state) => state.userSignIn);
  const { user } = userSignIn;


  return (
    <div className="App">
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Route path="/contactus" component={ContactUs}></Route>
          <Route path="/aboutus" component={AboutUs}></Route>
          {/* <Route path="/login" component={SignIn}></Route> */}
          <Route path="/register" component={SignUp}></Route>
          <Route path="/donateother" component={Donateother}></Route>
          <Route path="/donatemoney" component={DonateMoney}></Route>
          <Route path="/paynow" component={MoneyTransfer}></Route>
          <Route path="/admin" component={Admin} exact></Route>
          <Route path="/manager" component={ManagerOperation} exact></Route>
          <Route path="/adminregister" component={AdminRegister}></Route>
          <Route path="/addmanager" component={AdminAddManager}></Route>
          <Route path="/editAdmin" component={AdminEdit}></Route>
          <Route path="/deleteManager" component={AdminDeleteManager}></Route>
          <Route path="/addWorker" component={ManagerAddWorker}></Route>
          <Route path="/editManager" component={ManagerEdit}></Route>
          <Route path="/deleteWorker" component={ManagerDeleteWorker}></Route>
          <Route path="/login" component={Login}></Route>
          <Route path="/forgetPassword" component={ForgetPassword}></Route>
          <Route path="/Otp" component={Otp}></Route>
          <Route path="/changePassword" component={ChangePassword}></Route>
          <Route path="/nav" component={Navbar1}></Route>
          <Route path="/home" component={Home}></Route>
          <Route path="/donarsList" component={DonarsList}></Route>
          <Route path="/" component={Home} exact></Route>
          {user && user.user ? <Route path="/donar" component={User} exact></Route> : null}
          {user && user.admin ? <Route path="/admin" component={AdminOperation} exact></Route> : null}
          {user && user.manager ? <Route path="/manager" component={ManagerOperation} exact></Route> : null}
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
