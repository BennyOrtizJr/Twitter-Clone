import React, { Component } from 'react';
import './Login.css';
import { Link } from "react-router-dom";

class Login extends Component{
  constructor(){
    super()
    this.state={
      userName: "",
      password: ""
    } 
  }

  handleChange = (e) => {
    const { name, value } = e.target
    this.setState({ [name] : value})
  }

  render(){
    return(
      <div className="login-page">
        <div className="logo-image">
          <img src="https://img.icons8.com/cute-clipart/200/000000/twitter.png" alt=""/>
        </div>
        <form className="login-form">
          <h4 className="login-message">Login to Twitter</h4>
          <input
          className="user-input"
          type="text"
          name="userName"
          value={this.state.userName}
          placeholder="User Id"
          onChange={this.handleChange}
          required
          />
          <input
          className="user-input"
          type="password"
          name="password"
          value={this.state.password}
          placeholder="Password"
          onChange={this.handleChange}
          required
          />
        <Link to="/TweetsList"><button className="login-button">Login</button></Link>
      </form> 
  </div>
    )
  }
}
  
export default Login;