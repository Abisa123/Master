import React from 'react';
import {Link} from 'react-router-dom';
function Login() {
    return (
    <div className="form">
    <div className="box">
          
        <h1>ABISA</h1>
        <h3>LOGIN</h3>
        <input type="text" placeholder="username" name="uname" required/>
  
        <input type="password" placeholder="password" name="psw" required/>
        
        <span className="psw"><a href="#pablo">Forget?</a></span>
        <Link to="/dashboard">
        <button type="submit">Login</button>
        </Link>
      </div>
    </div>
       
    )
}

export default Login;
