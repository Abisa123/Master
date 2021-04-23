import {Route, Switch} from 'react-router-dom'
import './App.css';
import Landing from "./components/Landing.js";
import Login from "./components/Login.js";
import Dashboard from './components/Dashboard.js';
function App() {
  return (
    <div className="App">
      <Switch>
      <Route path="/" exact component={Landing}/> 
      <Route path="/login" exact component={Login}/> 
      <Route path="/dashboard" exact component={Dashboard}/> 
      
      </Switch>
    </div>
  );
}

export default App;
