import React, { Component } from 'react';
import '../App.css';

class Login extends Component {
  state = {
    username: "",
    password: ""
  }


  componentDidMount() {
    this.preLog()
  }


  async preLog() {
    let resp = await fetch("http://localhost:3000/prelog");
    // eslint-disable-next-line
    let content = await resp.json()

    if (content.user) {

      await this.setState({ username: content.user.username, password: content.user.password })
      await this.loginBtn()
    }
  }


  render() {
    return (
      <div className="LoginCont">
        <div className="Login">
          <br /><br />
          <p className="loghead">Login</p><br /><br />
          <span className="loginfo">&nbsp;&nbsp;&nbsp;&nbsp;User name: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
       <input className="logInput" type="text" name="username" onChange={this.handler.bind(this)} value={this.state.username}></input></span><br /><br />
          <span className="loginfo">&nbsp;&nbsp;&nbsp;&nbsp;Password:&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
       <input className="logInput" type="password" name="password" onChange={this.handler.bind(this)} value={this.state.password}></input></span><br /><br /><br />
          <button type="button" className="btn btn-warning btn-sign-in" onClick={this.loginBtn.bind(this)}>Sign In</button>
          <div className="noAccount" onClick={this.prophasAccount.bind(this)}>I don't have an account</div>

          <div className={this.props.propstate.alert + " alert alert-danger alert-dismissible fade show alertinherit"} role="alert">
            <strong>{this.props.propstate.alertBoldTxt}</strong> {this.props.propstate.alertTxt}
            <button type="button" className="close" onClick={this.alertOff.bind(this)}>
              <span aria-hidden="true">&times;</span>
            </button>
          </div>

        </div>
      </div>
    );
  }

  async loginBtn() {

    let resp = await fetch('http://localhost:3000/login', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(this.state)
    });
    // eslint-disable-next-line
    let data = await resp.json();

    if (data.noUser) {
      this.props.summonAlert("Error", "The user name or password that you typed is incorrect")
    }
    else {
      let userFollows = JSON.parse(data[0].following)
      this.props.isLogged(data[0].id, data[0].firstname, data[0].lastname, data[0].username, data[0].password, userFollows)
    }
  }

  handler(ev) {
    this.setState({ [ev.target.name]: ev.target.value })
  }

  prophasAccount() {
    this.props.hasAccount();
  }

  alertOff() {
    this.props.summonAlert("x")
  }

}

export default Login;
