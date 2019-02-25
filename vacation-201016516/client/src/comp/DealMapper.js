import React, { Component } from 'react';
import '../App.css';

class DealMapper extends Component {
  state = {
    userFollows: [],
    btnColor: "warning",
    btnTxt: "Follow this deal",
    btnClass: "followBlink",
    deals: []
  }

  componentDidMount() {
    this.refreshThis()
  }

  refreshThis() {
    let follows = JSON.parse(this.props.d.following)
    if (follows.includes(this.props.propstate.isLogged)) {
      this.setState({ btnColor: "success", btnTxt: "Unfollow deal", btnClass: "unfollow" })
    }
    else {
      this.setState({ btnColor: "warning", btnTxt: "Follow this deal", btnClass: "followBlink" })
    }
  }

  render() {
    return (
      <div className="App2">

        <div className="card text-white text-center bg-primary mb-3" id={this.props.d.id}>
          <img className="card-img-top" src={this.props.d.image} alt={this.props.d.destination} />

          <div className="card-header">{this.props.d.destination}</div>
          <div className="card-body">
            <h5 className="card-title cardTitle"> Departure: {this.props.d.departure} | Arrival: {this.props.d.arrival} <br /><font className="priceTag">Price: {this.props.d.price}$</font></h5>
            <p className="card-text description">{this.props.d.description}</p>
          </div>
          <a href="##" onClick={this.followDeal.bind(this)} className={this.props.propstate.followBtn + " btn btn-" + this.state.btnColor + " w-100 " + this.state.btnClass}>{this.state.btnTxt}</a>
          <div className="float-left"><a href="##" onClick={this.deleteDeal.bind(this)} className={this.props.propstate.deleteBtn + " btn btn-danger deleteBtn"}>&times; Remove</a>
            <a href="##" onClick={this.editDeal.bind(this)} className={this.props.propstate.editBtn + " btn btn-success editBtn"}>&#x270E; Edit</a></div>
        </div>



      </div>
    );
  }

  editDeal(ev) {

    let dealDestination = ev.target.parentNode.parentNode.children[1].innerText;
    let dealDescription = ev.target.parentNode.parentNode.children[2].innerText.split("$")[1].substr(2, 1000)
    let dealDeparture = ev.target.parentNode.parentNode.children[2].innerText.split(":")[1].split(" ")[1]
    let dealArrival = ev.target.parentNode.parentNode.children[2].innerText.split(":")[2].split("P")[0].split(" ")[1].split(ev.target.parentNode.parentNode.children[2].innerText.split(":")[2].split("P")[0].split(" ")[1].substr(-1))[0];
    let dealPrice = ev.target.parentNode.parentNode.children[2].innerText.split("$")[0].split(":")[3].substr(1, 6)
    let dealID = this.props.d.id;

    this.props.editor(dealDestination, dealDescription, dealDeparture, dealArrival, dealPrice, dealID)
  }

  async deleteDeal() {
    let id = this.props.d.id;
    let destination = this.props.d.destination;
    if (window.confirm("Are you sure you want to delete the " + destination + " deal (id - " + id + ")?")) {
      let resp = await fetch(`http://localhost:3000/delete_deal?dealID=${id}`)
      // eslint-disable-next-line
      let content = await resp.json();

      this.props.deals()
    }
  };

  async followDeal(ev) {

    let thisBtn = ev.target
    let dealID = this.props.d.id;
    let userID = this.props.propstate.isLogged;

    let parsedUserFollows = this.props.propstate.following;
    //  eslint-disable-next-line
    let parsedDealFollows = JSON.parse(this.props.propstate.deals.find((deal) => deal.id == thisBtn.parentNode.id).following);

    if (thisBtn.innerHTML === "Follow this deal") {

      thisBtn.classList.remove("followBlink", "btn-warning");
      thisBtn.classList.add("unfollow", "btn-success");
      thisBtn.innerHTML = "Unfollow deal";

      parsedUserFollows.push(dealID);
      parsedDealFollows.push(userID);

      let userFollows = JSON.stringify(parsedUserFollows)
      let dealFollows = JSON.stringify(parsedDealFollows)
      let resp = await fetch(`http://localhost:3000/follow_deal?dealID=${dealID}&userID=${userID}&userFollows=${userFollows}&dealFollows=${dealFollows}`)
      // eslint-disable-next-line
      let content = await resp.json();
      this.props.userFollowStatus(userFollows)
    }
    else {
      thisBtn.classList.remove("unfollow", "btn-success");
      thisBtn.classList.add("followBlink", "btn-warning");
      thisBtn.innerHTML = "Follow this deal";

      var userIndex = parsedUserFollows.indexOf(dealID);
      if (userIndex > -1) {
        parsedUserFollows.splice(userIndex, 1);
      }

      var dealIndex = parsedDealFollows.indexOf(userID);
      if (dealIndex > -1) {
        parsedDealFollows.splice(dealIndex, 1);
      }

      let userFollows = JSON.stringify(parsedUserFollows);
      let dealFollows = JSON.stringify(parsedDealFollows)

      let resp = await fetch(`http://localhost:3000/follow_deal?dealID=${dealID}&userID=${userID}&userFollows=${userFollows}&dealFollows=${dealFollows}`)
      // eslint-disable-next-line
      let content = await resp.json();
      this.props.userFollowStatus(userFollows, dealFollows)

    }
  }

}

export default DealMapper;
