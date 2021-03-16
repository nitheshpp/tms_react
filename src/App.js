import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import './App.css';
import Navbar from './components/Navbar';
import ViewAndAssignTask from './components/ViewAndAssignTask';
import  CreateUser from './components/CreateUser';
import  CreateTask from './components/CreateTask';
import  ChangeName from './components/ChangeName';
import  ChangePassword from './components/ChangePassword';
import  ChangePhoneNumber from './components/ChangePhoneNumber';


function App() {
  return (
    <div>

      <Router>
        <Navbar/>
        <Switch>
        <Route path='/' exact />
          <Route path='/ViewAndAssignTask'  component={ViewAndAssignTask}/>
          <Route path='/MangeTask/CreateTask' component={CreateTask}/>
         <Route path='/MangeUser/CreateUser' component={CreateUser}/>
          <Route path='/AccountSetings/ChangeName' component={ChangeName}/>
          <Route path='/AccountSetings/ChangePassword' component={ChangePassword}/>
          <Route path='/AccountSetings/ChangePhoneNumber' component={ChangePhoneNumber}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
