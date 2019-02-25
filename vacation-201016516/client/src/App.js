import React, { Component } from 'react';
import './App.css';
import Login from './comp/Login';
import Header from './comp/Header';
import Register from './comp/Register';
import DealMapper from './comp/DealMapper';
import { subscribeToData } from './api';
import Editor from './comp/Editor';
import Graph from './comp/Graph';

class App extends Component {
  state = {
    hasAccount: true,
    alert: "alertOff",
    alertBoldTxt: "",
    alertTxt: "",
    isLogged: 0,
    firstname: "Logged off",
    following: [],
    deals: [],
    door: "hideIfNotLogged",
    followBtn: "",
    deleteBtn: "",
    editBtn: "",
    editor: false,
    dealDestination: "",
    dealDescription: "",
    dealDeparture: "",
    dealArrival: "",
    dealPrice: "",
    dealID: "",
    led: "red",
    graph: false

  }

  componentDidMount() {
    this.deals();
  }

  async deals() {
    subscribeToData((err, deals) => this.setState({
      deals
    }));
    if (this.state.editor) {
      this.setState({ editor: false, isLogged: 1 })
    }
  }

  render() {

    if (this.state.hasAccount & this.state.isLogged === 0) {
      let LoggedAdmin = 0;
      return (
        <div className="App">

          <Header LoggedAdmin={LoggedAdmin} logOut={this.logOut.bind(this)} propstate={this.state} />
          <Login isLogged={this.isLogged.bind(this)} summonAlert={this.summonAlert.bind(this)} propstate={this.state} hasAccount={this.hasAccount.bind(this)} />
        </div>
      );
    }
    if (!this.state.hasAccount & this.state.isLogged === 0 && !this.state.graph) {
      return (
        <div className="App">

          <Header logOut={this.logOut.bind(this)} propstate={this.state} />
          <Register isLogged={this.isLogged.bind(this)} summonAlert={this.summonAlert.bind(this)} propstate={this.state} hasAccount={this.hasAccount.bind(this)} />
        </div>
      );
    }
    if (this.state.isLogged !== 0 && this.state.isLogged !== 1 && !this.state.graph) {
      var isLogged = this.state.isLogged
      return (

        <div className="App2">
          <Header logOut={this.logOut.bind(this)} propstate={this.state} />
          {this.state.deals.sort(function compare(a) { if (JSON.parse(a.following).includes(isLogged)) { return -1 } else { return 1 } }).map(d => <DealMapper propstate={this.state} key={d.id} d={d} deals={this.deals.bind(this)} userFollowStatus={this.userFollowStatus.bind(this)} />)}
        </div>
      );
    }
    if (this.state.isLogged === 1 && !this.state.editor && !this.state.graph) {
      let LoggedAdmin = this.state.isLogged
      return (
        <div className="App2">
          <Header graph={this.graph.bind(this)} editor={this.editor.bind(this)} LoggedAdmin={LoggedAdmin} logOut={this.logOut.bind(this)} propstate={this.state} />

          {this.state.deals.map(d => <DealMapper deals={this.deals.bind(this)} editor={this.editor.bind(this)} propstate={this.state} key={d.id} d={d} />)}
        </div>
      );
    }
    if (this.state.editor && !this.state.graph) {
      let LoggedAdmin = 1

      return (
        <div className="App">
          <Header graph={this.graph.bind(this)} LoggedAdmin={LoggedAdmin} editor={this.editor.bind(this)} logOut={this.logOut.bind(this)} propstate={this.state} />
          <Editor backBtn={this.backBtn.bind(this)} deals={this.deals.bind(this)} editor={this.editor.bind(this)} propstate={this.state} />
        </div>
      );
    }
    if (this.state.graph && !this.state.editor) {
      let LoggedAdmin = 1
      let deals = this.state.deals;
      return (
        <div className="App">
          <Header graph={this.graph.bind(this)} LoggedAdmin={LoggedAdmin} editor={this.editor.bind(this)} logOut={this.logOut.bind(this)} propstate={this.state} />
          <Graph graph={this.graph.bind(this)} backBtn={this.backBtn.bind(this)} propstate={this.state} mydeals={deals} deals={this.deals.bind(this)} />
        </div>
      );
    }
  }

  graph() {
    if (!this.state.graph) {
      this.setState({ editor: false, graph: true })
    }
    else {
      this.setState({ editor: false, graph: false })
    }
  }

  editor(dealDestination, dealDescription, dealDeparture, dealArrival, dealPrice, dealID, adder) {
    
    if (adder) {
      this.setState({
        editor: true,
        graph: false,
        dealDestination: dealDestination,
        dealDescription: dealDescription,
        dealDeparture: dealDeparture,
        dealArrival: dealArrival,
        dealPrice: dealPrice,
        dealID: dealID
      })
    }
    else {
      this.setState({
        editor: !this.state.editor,
        graph: false,
        dealDestination: dealDestination,
        dealDescription: dealDescription,
        dealDeparture: dealDeparture,
        dealArrival: dealArrival,
        dealPrice: dealPrice,
        dealID: dealID
      })
    }
  }

  backBtn() {
    this.setState({
      editor: false
    })
  }

  summonAlert(alertBoldTxt, alertTxt, ev) {

    if (alertBoldTxt === "x") {
      this.setState({ alert: "alertOff", alertBoldTxt: "", alertTxt: "" })
    }
    else {
      this.setState({ alert: "alertOn", alertBoldTxt: alertBoldTxt, alertTxt: alertTxt })
    }
  }

  hasAccount() {

    this.setState({ hasAccount: !this.state.hasAccount })
  }

  isLogged(id, firstname, lastname, username, password, following) {
    this.setState({ isLogged: id, door: "displayIfLogged", following: following })
    if (this.state.isLogged === 1) {
      this.setState({
        followBtn: "hideIfNotLogged",
        deleteBtn: "displayIfLogged",
        editBtn: "displayIfLogged",
        firstname: "🔑 Admin Mode",
        led: "green"
      })
    }
    if (this.state.isLogged !== 1 && this.state.isLogged !== 0) {
      this.setState({
        followBtn: "displayIfLogged",
        deleteBtn: "hideIfNotLogged",
        editBtn: "hideIfNotLogged",
        isLogged: id,
        firstname: "Hello " + firstname,
        led: "green"
      })
    }
  }

  async logOut() {

    let resp = await fetch("http://localhost:3000/logout");
    // eslint-disable-next-line
    let content = await resp.json()

    await document.location.reload()
  }

  userFollowStatus(following) {

    this.setState({ following: JSON.parse(following) })

    this.deals();
  }

}


export default App;
