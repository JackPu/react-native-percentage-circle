/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from "react";
// import PercentageCircle from "react-native-percentage-circle";
import PercentageCircle from "./lib/index";
import TimerMixin from "react-timer-mixin";
import { Platform, StyleSheet, Text, View, Image } from "react-native";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      percent: 0
    };
  }

  componentDidMount() {
    let self = this;
    this.intval = setInterval(() => {
      const { percent } = this.state;
      this.setState({ percent: percent + 10 });
    }, 100);
  }

  onComplete = () => {
    alert("Login Complete");
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Use React Native Percentage Circle</Text>
        <View style={styles.row}>
          <View style={styles.item}>
            <PercentageCircle radius={35} percent={50} color={"#3498db"} />
            <Text style={[styles.percentText]}> 50% </Text>
          </View>
          <View style={styles.item}>
            <PercentageCircle radius={35} percent={40} color={"#f39c12"}>
              <Text style={styles.checkin}>30</Text>
              <Text style={styles.desc}>人已签到</Text>
            </PercentageCircle>
            <Text style={[styles.percentText]}> 30% </Text>
          </View>
          <View style={styles.item}>
            <PercentageCircle
              radius={35}
              bgcolor="#fff"
              percent={75}
              color={"#2ecc71"}
            />
            <Text style={[styles.percentText]}> 75% </Text>
          </View>
        </View>
        <View style={styles.row}>
          <View style={styles.item}>
            <PercentageCircle
              radius={60}
              bgcolor="#fff"
              borderWidth={4}
              percent={90}
              color={"#34495e"}
            >
              <View
                style={{
                  marginLeft: 30,
                  alignItems: "center",
                  flexDirection: "row"
                }}
              >
                <Image
                  style={{ width: 25, height: 25 }}
                  source={require("./images/shoes.png")}
                />
                <Text style={{ flex: 1, fontSize: 13 }}>步数</Text>
              </View>
              <View>
                <Text style={{ fontSize: 23, color: "#34495e" }}>20000</Text>
              </View>
            </PercentageCircle>
            <Text style={[styles.percentText]}> 90% </Text>
          </View>
        </View>
        <View style={styles.row}>
          <View style={styles.item}>
            <PercentageCircle
              radius={60}
              percent={this.state.percent}
              color={"#9b59b6"}
              onComplete={this.onComplete}
            />
            <Text style={[styles.percentText]}> {this.state.percent} %</Text>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    paddingTop: 66,
    backgroundColor: "#fff"
  },
  welcome: {
    fontSize: 16,
    textAlign: "center",
    margin: 20
  },
  row: {
    //height:0,
    flexDirection: "row",
    alignItems: "center",
    flexWrap: "wrap",
    marginBottom: 40
  },
  item: {
    flex: 0.33,
    justifyContent: "center",
    alignItems: "center"
  },
  percentText: {
    fontSize: 15,
    paddingTop: 10
  },
  instructions: {
    textAlign: "center",
    color: "#333333",
    marginBottom: 5
  },

  checkin: {
    fontSize: 20,
    color: "#f39c12"
  },
  desc: {
    fontSize: 12,
    color: "#999"
  }
});
