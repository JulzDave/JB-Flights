import React, { Component } from 'react';
import '../App.css';

class Register extends Component {
  state = {
    firstname: "",
    lastname: "",
    regUsername: "",
    regPassword: ""
  }
  render() {
    return (
      <div className="LoginCont">
        <div className="Login Register">
          <br /><br />
          <p className="loghead">Register</p><br /><br />
          <span className="loginfo">&nbsp;&nbsp;&nbsp;&nbsp;Firstname: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
       <input className="logInput" type="text" name="firstname" onChange={this.handler.bind(this)} value={this.state.firstname}></input></span><br /><br />
          <span className="loginfo">&nbsp;&nbsp;&nbsp;&nbsp;Lastname:&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
       <input className="logInput" type="text" name="lastname" onChange={this.handler.bind(this)} value={this.state.lastname}></input></span><br /><br /><br />
          <span className="loginfo">&nbsp;&nbsp;&nbsp;&nbsp;User name: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
       <input className="logInput" type="text" name="regUsername" onChange={this.handler.bind(this)} value={this.state.regUsername}></input></span><br /><br />
          <span className="loginfo">&nbsp;&nbsp;&nbsp;&nbsp;Password:&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
       <input className="logInput" type="password" name="regPassword" onChange={this.handler.bind(this)} value={this.state.regPassword}></input></span><br /><br /><br />
          <button type="button" className="btn btn-warning btn-sign-in" onClick={this.registerBtn.bind(this)}>Register</button>
          <div className="noAccount" onClick={this.prophasAccount.bind(this)}>I already have an account</div>

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

  handler(ev) {
    this.setState({ [ev.target.name]: ev.target.value })
  }

  prophasAccount() {
    this.props.hasAccount();
  }

  async registerBtn() {
    if (this.state.firstname.length > 1 && this.state.lastname.length > 1 && this.state.regUsername.length > 5 && this.state.regPassword.length > 5) {
      let resp = await fetch('http://localhost:3000/register', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(this.state)
      });
      // eslint-disable-next-line
      let data = await resp.json();
      if (data.taken) {
        this.props.summonAlert("Error", "User name " + this.state.regUsername + " already taken")
      }
      else {
        let userFollows = JSON.parse(data[0].following)

        this.props.isLogged(data[0].id, data[0].firstname, data[0].lastname, data[0].username, data[0].password, userFollows)

      }
    }
    else {
      if (this.state.regUsername.length <= 5 || this.state.regPassword.length <= 5) {
        this.props.summonAlert("Error", "Make sure your User name And Password are at least 6 characters long")

      }
      else {
        this.props.summonAlert("Error", "You must include a first and last name")

      }
    }
  }

  alertOff() {
    this.props.summonAlert("x")
  }
}

export default Register;
