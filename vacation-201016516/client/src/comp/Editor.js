import React, { Component } from 'react';
import '../App.css';
import Axios from 'axios';


class Editor extends Component {
  state = {
    dealDestination: this.props.propstate.dealDestination,
    dealDescription: this.props.propstate.dealDescription,
    dealDeparture: this.props.propstate.dealDeparture,
    dealArrival: this.props.propstate.dealArrival,
    dealPrice: parseInt(this.props.propstate.dealPrice),
    dealID: this.props.propstate.dealID,
    header: "Editor",
    btnTxt: "Edit",
    fileName: "",
    imgInp: "imgInpShow",
    isVisible: "invisi"
  }

  componentDidMount() {

    this.dataReciever()
  }

  componentWillReceiveProps() {

    this.dataReciever("")
  }



  dataReciever(ev) {
    let id = this.props.propstate.dealID

    this.setState({
      dealDestination: this.props.propstate.dealDestination,
      dealDescription: this.props.propstate.dealDescription,
      dealDeparture: this.props.propstate.dealDeparture,
      dealArrival: this.props.propstate.dealArrival,
      dealPrice: parseInt(this.props.propstate.dealPrice),
      dealID: this.props.propstate.dealID
    });

    if (id === "" || ev === "") {
      this.setState({ header: "Add New Deal", btnTxt: "Add", dealDestination: "", dealDescription: "", dealDeparture: "", dealArrival: "", dealPrice: 0, dealID: "" })
    }
    else {
      this.setState({ header: "Editor", btnTxt: "Edit" })
    }
  }





  render() {
    return (
      <div className="EditorCont App">
        <div className="Login Editor">
          <br /><br />
          <p className="loghead">{this.state.header}</p><br /><br />
          <span className="loginfo">&nbsp;&nbsp;&nbsp;&nbsp;Destination: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
       <input className="logInput" type="text" name="dealDestination" onChange={this.handler.bind(this)} value={this.state.dealDestination}></input></span><br /><br />
          <span className="loginfo editDesc">&nbsp;&nbsp;&nbsp;&nbsp;Description:&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
       <textarea className="logInput txtArea" maxLength="599" name="dealDescription" onChange={this.handler.bind(this)} value={this.state.dealDescription}></textarea></span><br /><br />
          <div className="float-left edit-arrival-departure"><span className="loginfo edit-departure">&nbsp;&nbsp;&nbsp;&nbsp;Departure:&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
       <input className="logInput" type="date" name="dealDeparture" onChange={this.handler.bind(this)} value={this.state.dealDeparture}></input></span><br /><br />
            <span className="loginfo edit-arrival">&nbsp;&nbsp;&nbsp;&nbsp;Arrival:&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
       <input className="logInput" type="date" name="dealArrival" onChange={this.handler.bind(this)} value={this.state.dealArrival}></input></span></div><br /><br />
          <span className="loginfo">&nbsp;&nbsp;&nbsp;&nbsp;Price:&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
       <input className="logInput" type="number" name="dealPrice" onChange={this.handler.bind(this)} value={this.state.dealPrice}></input></span><br /><br />
          <span className="loginfo editImage">&nbsp;&nbsp;&nbsp;&nbsp;Image: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
       <input className={this.state.imgInp} type="file" name="profileImage" onChange={this.uploadImage.bind(this)}></input><span className={this.state.isVisible + " didUpload"}><font id="check">&#x2713;</font> &nbsp;&nbsp;Image <font className="imgUploaded">uploaded!</font></span></span><br /><br /><br />
          <button className="btn btn-primary backBtn" onClick={this.goBack.bind(this)}>Go back</button> <button type="button" onClick={this.updateDeal.bind(this)} className="btn btn-warning btn-sign-in editorBtn" >{this.state.btnTxt}</button><br />

        </div>
      </div>


    );
  }

  uploadImage = ev => {

    var formData = new FormData();
    let fileName = ev.target.files[0].name.split(".jpg")[0] + '-' + Date.now() + '.jpg';

    this.setState({ fileName: fileName })

    formData.append("profileImage", ev.target.files[0], fileName);
    Axios.post('http://localhost:3000/profile/', formData)
      .then(res => {
      })
    this.setState({ isVisible: "visi" })
  }

  async updateDeal() {
    if (this.state.dealID === "") {
      let myImage = this.state.fileName;
      let price = this.state.dealPrice;
      let resp = await fetch(`http://localhost:3000/adddeal?dealDestination=${this.state.dealDestination}&dealImage=uploads/${myImage}&dealDescription=${this.state.dealDescription}&dealDeparture=${this.state.dealDeparture}&dealArrival=${this.state.dealArrival}&dealPrice=${price}`)
      // eslint-disable-next-line
      let content = await resp.json();
      this.props.deals()
    }
    else {
      let myImage = this.state.fileName;
      let id = parseInt(this.state.dealID)
      let price = parseInt(this.state.dealPrice)
      let resp = await fetch(`http://localhost:3000/editDeal?dealDestination=${this.state.dealDestination}&dealImage=uploads/${myImage}&dealDescription=${this.state.dealDescription}&dealDeparture=${this.state.dealDeparture}&dealArrival=${this.state.dealArrival}&dealPrice=${price}&dealID=${id}`)
      // eslint-disable-next-line
      let content = await resp.json();
      this.props.deals()
    }
  };


  handler(ev) {
    this.setState({ [ev.target.name]: ev.target.value })
  }

  goBack() {
    this.props.backBtn()

  }

}

export default Editor;
