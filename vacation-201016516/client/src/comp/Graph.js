import React, { Component } from 'react';
import '../App.css';
import { VictoryLabel } from 'victory-core';
import { VictoryBar } from 'victory-bar';
import { VictoryChart } from 'victory-chart';
import { VictoryAxis } from 'victory-axis';


class Graph extends Component {
  state = {
    chartData: [],
    following: this.props.propstate.following
  }

  componentDidMount() {
    this.getFollowersData()
  }

  UNSAFE_componentWillReceiveProps() {
// Real-time graph representation via socket
    setTimeout(() => {
      this.getFollowersData()
    }, 1000);

  }

  getFollowersData() {
    var chartData = []
    for (let i = 0; i < this.props.propstate.deals.length; i++) {

      if (JSON.parse(this.props.propstate.deals[i].following).length > 0) {
        chartData.push({
          experiment: "--" + this.props.propstate.deals[i].destination,
          y: JSON.parse(this.props.propstate.deals[i].following).length
        })
      }
      this.setState({ chartData: chartData })
    }
  }

  render() {

    return (
      <div className="LoginCont graphCont">
        <div className="Login graph">
          <br /><br />
          <p className="loghead">User interest data</p><br /><br />
          <img onClick={this.viewGraph.bind(this)} className="backArrow" src="images\go_back.gif" alt="go back" title="Go back"></img>
          <div className="myChart">
            <VictoryChart
              domainPadding={{ x: 40, y: 40 }}
              animate={{ duration: 500 }}
            >
              <VictoryBar
                data={this.state.chartData}
                alignment="end"
                x="experiment"

                style={{
                  data: { fill: "#c43a31", stroke: "black", strokeWidth: 2 }
                }}

              />
              <VictoryAxis
                label="Vacations"
                tickLabelComponent={<VictoryLabel angle={50} verticalAnchor="end" />}

                style={{
                  tickLabels: { padding: 35 },
                  axisLabel: { padding: 60, fontWeight: "bolder" }
                }}
              />
              <VictoryAxis dependentAxis
                label="Followers"
                tickFormat={(t) => `${t}`}
                style={{

                  axisLabel: { padding: 30, fontWeight: "bolder" }
                }}
              />
            </VictoryChart>
          </div>
        </div>
      </div>
    );
  }
  viewGraph() {
    this.props.graph()
  }
}


export default Graph;
