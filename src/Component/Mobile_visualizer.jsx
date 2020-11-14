import React, { Component } from "react";
import "./Visualizer.css";
import { selection } from "../Algorithm/SelectionSort";
import { getMergeSortAnimations } from "../Algorithm/MergeSort";

export default class Visualizer extends Component {
  state = {
    selectSpeedType: "",
    selectAlgo: "",
    Array_bar_width: 1,
    slider_value: 50,
    select1: "",
    select2: "",
  };

  constructor(props) {
    super(props);
    this.state = {
      array: [],
      bar_num: 15,
    };
  }

  handleChange(event) {
    var num = event.target.value;
    this.setState({ slider_value: event.target.value });
    this.resetArray(num);
  }
  componentDidMount() {
    this.setState({ selectSpeedType: "null" });
    this.setState({ selectAlgo: "null" });
    this.setState({ select1: "false" });
    this.setState({ slider_value: 50 });
    this.resetArray(50);
  }
  resetArray(num) {
    this.setState({ bar_num: 15 });
    const array = [];

    var slider = document.getElementById("myRange");
    console.log("bar_num:" + this.state.bar_num);
    for (let i = 0; i < this.state.bar_num; i++) {
      array.push(randomInterval(5, 500));
    }
    this.setState({ array });

    if (num > 20 && num <= 30) {
      this.setState({ Array_bar_width: 20 });
      this.setState({ bar_num: 15 });
    } else if (num > 30 && num <= 40) {
      this.setState({ Array_bar_width: 15 });
      this.setState({ bar_num: 20 });
    } else if (num > 40 && num <= 50) {
      this.setState({ Array_bar_width: 10 });
      this.setState({ bar_num: 25 });
    } else if (num > 50 && num <= 60) {
      this.setState({ Array_bar_width: 8 });
      this.setState({ bar_num: 30 });
    } else if (num > 60 && num <= 70) {
      this.setState({ Array_bar_width: 5 });
      this.setState({ bar_num: 35 });
    } else if (num > 70 && num <= 80) {
      this.setState({ Array_bar_width: 4 });
      this.setState({ bar_num: 40 });
    } else if (num > 80 && num < 90) {
      this.setState({ Array_bar_width: 3 });
      this.setState({ bar_num: 50 });
    } else if (num > 90 && num < 100) {
      this.setState({ Array_bar_width: 2 });
      this.setState({ bar_num: 50 });
    }
  }
  mergesort() {
    const animations = getMergeSortAnimations(this.state.array);
    console.log("" + animations);
    for (let i = 0; i < animations.length; i++) {
      const arrayBars = document.getElementsByClassName("array-bar");
      const isColorChange = i % 3 !== 2;
      if (isColorChange) {
        const [barOneIdx, barTwoIdx] = animations[i];
        const barOneStyle = arrayBars[barOneIdx].style;
        const barTwoStyle = arrayBars[barTwoIdx].style;
        const color = i % 3 === 0 ? "red" : "turquoise";
        setTimeout(() => {
          barOneStyle.backgroundColor = color;
          barTwoStyle.backgroundColor = color;
        }, i * this.state.selectSpeedType);
      } else {
        setTimeout(() => {
          const [barOneIdx, newHeight] = animations[i];
          const barOneStyle = arrayBars[barOneIdx].style;
          barOneStyle.height = `${newHeight}px`;
        }, i * this.state.selectSpeedType);
      }
    }
  }
  selection() {
    const animation1 = selection(this.state.array);
    const array = this.state.array;

    for (let i = 0; i < animation1.length; i++) {
      const arrayBars = document.getElementsByClassName("array-bar");
      if (animation1[i][0] === "compare1" || animation1[i][0] === "compare2") {
        const color = animation1[i][0] === "compare1" ? "red" : "turquoise";
        const [temp, barOneIdx, barTwoIdx] = animation1[i];
        const barOneStyle = arrayBars[barOneIdx].style;
        const barTwoStyle = arrayBars[barTwoIdx].style;
        setTimeout(() => {
          barOneStyle.backgroundColor = color;
          barTwoStyle.backgroundColor = color;
        }, i * this.state.selectSpeedType);
      } else {
        setTimeout(() => {
          const [temp, barOne, newHeight] = animation1[i];
          const barOneStyle = arrayBars[barOne].style;
          barOneStyle.height = `${newHeight}px`;
        }, i * this.state.selectSpeedType);
      }
    }
  }
  visualize() {
    console.log("speed:" + this.state.slider_value);
    console.log("algorithm:" + this.state.selectAlgo);
    if (this.state.selectAlgo === "select") {
      this.selection();
    } else if (this.state.selectAlgo === "merge") {
      this.mergesort();
    }
    console.log(this.state.selectSpeedType);
    if (
      this.state.selectSpeedType === "null" ||
      this.state.selectAlgo === "null"
    ) {
      console.log("check");
      console.log("" + this.state.select1);
      this.setState({ select1: "false" });
    } else {
      console.log("success");
    }
  }

  render() {
    const { array } = this.state;
    return (
      <div>
        <div class="header">
          <div class="row">
            <div class="col-1"></div>
            <div class="col-5">
              <div class="col-5">
                {" "}
                <button
                  className="btn"
                  onClick={() => this.resetArray(this.state.slider_value)}
                >
                  Generate random array
                </button>
              </div>
              <div class="col-7">
                <div className="slider">
                  <label id="l1">Change Array Size</label>
                  <input
                    type="range"
                    min="5"
                    max="100"
                    id="myRange"
                    className="range"
                    onChange={this.handleChange.bind(this)}
                  />
                </div>
              </div>
            </div>
            <div class="col-6">
              <div class="col-4">
                {" "}
                <div className="selectdiv">
                  <select
                    onChange={(e) =>
                      this.setState({ selectSpeedType: e.target.value })
                    }
                  >
                    <option disabled selected hidden>
                      {" "}
                      Speed{" "}
                    </option>
                    <option value="150">Slow</option>
                    <option value="50">Medium</option>
                    <option value="10">Fast</option>
                  </select>
                </div>
              </div>
              <div class="col-4">
                <div className="selectdiv">
                  <select
                    onChange={(e) =>
                      this.setState({ selectAlgo: e.target.value })
                    }
                  >
                    <option disabled selected hidden>
                      {" "}
                      Select Algorithm{" "}
                    </option>
                    <option value="merge">MergeSort</option>
                    <option value="select">SelectionSort</option>
                    {/* <option value="bubble">BubbleSort</option> */}
                  </select>
                </div>
              </div>
              <div class="col-2">
                <button
                  className={
                    this.state.select1 === "false" ? "visual" : "visual1"
                  }
                  onClick={() => this.visualize()}
                >
                  Visualize!!
                </button>
              </div>
            </div>
          </div>
        </div>

        <div class="row">
          <div className="array_container">
            {array.map((value, idx) => (
              <div
                className="array-bar"
                key={idx}
                style={{
                  height: `${value}px`,
                  width: `${this.state.Array_bar_width}px`,
                  backgroundColor: "#40E0D0",
                }}
              ></div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}
function randomInterval(min, max) {
  //return random number between min and max
  return Math.floor(Math.random() * (max - min + 1) + min);
}
