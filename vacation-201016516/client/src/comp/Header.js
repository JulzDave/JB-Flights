import React, { Component } from 'react';
import '../App.css';

class Header extends Component {
  state = {
    headerBtn1: "About",
    headerBtn2: "",
    showBtn: "alertOff"
  }

  componentWillReceiveProps() {

    if (this.props.LoggedAdmin === 1) {
      this.setState({ headerBtn1: "Add Vacation", headerBtn2: "Graph", showBtn: "alertOn" })
    }
    else {
      this.setState({ headerBtn1: "About", headerBtn2: "", showBtn: "alertOff" })
    }
  }



  render() {
    return (
      <header className="App">
        <nav className="navbar navbar-expand-lg fixed-top navbar-dark bg-primary">
          <a className="navbar-brand" href="##"><font className="logo"><font className="darkorange">B</font>ryce<font className="darkorange">N</font>imbus</font></a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className={this.state.showBtn + " nav-link"} href="##" onClick={this.addDeal.bind(this)}>{this.state.headerBtn1}<span className="sr-only">(current)</span></a>
              </li>
              <li className="nav-item">
                <a className={this.state.showBtn + " nav-link"} onClick={this.viewGraph.bind(this)} href="##">{this.state.headerBtn2}</a>
              </li>
            </ul>
            <ul className="navbar-nav ml-auto">

              <li className="nav-item led">
                <p className="status unpad cursorArrow"><span role="img" aria-label="led">{this.props.propstate.firstname} <img className={this.props.propstate.led + "Led"} src={"images\\" + this.props.propstate.led + "-led-diode.png"} alt="led" /></span></p>
              </li>
            </ul>
            <ul className={this.props.propstate.door + " navbar-nav "}>

              <li className="nav-item exit" onClick={this.logOut.bind(this)}>
                <a className="nav-link unpad" href="##"><span title="Logout" role="img" aria-label="door">&#x1F6AA;</span></a>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    );
  }

  addDeal(ev) {
    if (ev.target.innerHTML.split("<")[0] === "Add Vacation") {
      this.props.editor("", "", "", "", 0, "", true)
    }
  }

  viewGraph() {
    if (this.state.headerBtn2 === "Graph") {
      this.props.graph()
    }
  }

  logOut() {
    this.props.logOut()
  }

}

export default Header;
