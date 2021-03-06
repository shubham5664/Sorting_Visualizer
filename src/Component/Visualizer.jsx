import React, { Component } from "react";
import "./Visualizer.css";
import { selection } from "../Algorithm/SelectionSort";
import { getMergeSortAnimations } from "../Algorithm/MergeSort";
import { getBubbleSort } from "../Algorithm/BubbleSort";
import { getquicksort } from "../Algorithm/QuickSort";

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
    const array = [];
    console.log("num:" + num);
    for (let i = 0; i < num; i++) {
      array.push(randomInterval(5, 450));
    }

    if (num < 10) {
      this.setState({ Array_bar_width: 80 });
    } else if (num > 10 && num <= 20) {
      this.setState({ Array_bar_width: 40 });
    } else if (num > 20 && num <= 30) {
      this.setState({ Array_bar_width: 20 });
    } else if (num > 30 && num <= 40) {
      this.setState({ Array_bar_width: 15 });
    } else if (num > 40 && num <= 50) {
      this.setState({ Array_bar_width: 10 });
    } else if (num > 50 && num <= 60) {
      this.setState({ Array_bar_width: 8 });
    } else if (num > 60 && num <= 70) {
      this.setState({ Array_bar_width: 5 });
    } else if (num > 70 && num <= 80) {
      this.setState({ Array_bar_width: 4 });
    } else if (num > 80 && num < 90) {
      this.setState({ Array_bar_width: 3 });
    } else if (num > 90 && num < 100) {
      this.setState({ Array_bar_width: 2 });
    }
    this.setState({ array });
  }
  mergesort() {
    disable();
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
    const RESTORE_TIME = parseInt(
      this.state.selectSpeedType * animations.length
    );
    setTimeout(() => enable(), RESTORE_TIME);
  }
  selection() {
    disable();
    const animations = selection(this.state.array);
    const array = this.state.array;
    const arrayBars = document.getElementsByClassName("array-bar");
    for (let i = 0; i < animations.length; i++) {
      if (animations[i][0] === "compare1" || animations[i][0] === "compare2") {
        const color = animations[i][0] === "compare1" ? "red" : "turquoise";
        const [temp, barOneIdx, barTwoIdx] = animations[i];
        const barOneStyle = arrayBars[barOneIdx].style;
        const barTwoStyle = arrayBars[barTwoIdx].style;
        setTimeout(() => {
          barOneStyle.backgroundColor = color;
          barTwoStyle.backgroundColor = color;
        }, i * this.state.selectSpeedType);
      } else {
        setTimeout(() => {
          const [temp, barOne, newHeight] = animations[i];
          const barOneStyle = arrayBars[barOne].style;
          barOneStyle.height = `${newHeight}px`;
        }, i * this.state.selectSpeedType);
      }
    }
    const RESTORE_TIME = parseInt(
      this.state.selectSpeedType * animations.length
    );
    setTimeout(() => enable(), RESTORE_TIME);
  }
  bubblesort() {
    const animations = getBubbleSort(this.state.array);
    console.log("animation hello:" + animations);
    const arrayBars = document.getElementsByClassName("array-bar");
    for (let i = 0; i < animations.length; i++) {
      if (animations[i][0] == "compare1" || animations[i][0] == "compare2") {
        const color = animations[i][0] === "compare1" ? "red" : "turquoise";
        const [temp, barOneIdx, barTwoIdx] = animations[i];
        const barOneStyle = arrayBars[barOneIdx].style;
        const barTwoStyle = arrayBars[barTwoIdx].style;
        setTimeout(() => {
          barOneStyle.backgroundColor = color;
          barTwoStyle.backgroundColor = color;
        }, i * this.state.selectSpeedType);
      } else {
        setTimeout(() => {
          const [temp, barone, newheight] = animations[i];
          const barOneStyle = arrayBars[barone].style;
          barOneStyle.height = `${newheight}px`;
        }, i * this.state.selectSpeedType);
      }
    }
  }
  quicksort() {
    const animations = getquicksort(this.state.array);
    console.log("animations:" + animations);
    const arrayBars = document.getElementsByClassName("array-bar");
    for (let i = 0; i < animations.length; i++) {
      if (animations[i][0] === "compare1" || animations[i][0] === "compare2") {
        const color = animations[i][0] === "compare1" ? "red" : "turquoise";
        const [temp, barOneIdx, barTwoIdx] = animations[i];
        const barOneStyle = arrayBars[barOneIdx].style;
        const barTwoStyle = arrayBars[barTwoIdx].style;
        setTimeout(() => {
          barOneStyle.backgroundColor = color;
          barTwoStyle.backgroundColor = color;
        }, i * this.state.selectSpeedType);
      } else {
        setTimeout(() => {
          const [temp, barOneIdx, newHeight] = animations[i];
          const barOneStyle = arrayBars[barOneIdx].style;
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
    } else if (this.state.selectAlgo === "bubble") {
      this.bubblesort();
    } else if (this.state.selectAlgo === "quick") {
      this.quicksort();
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
                  id="random_array"
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
                    id="speed"
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
                    id="algorithm"
                  >
                    <option disabled selected hidden>
                      {" "}
                      Select Algorithm{" "}
                    </option>
                    <option value="merge">MergeSort</option>
                    <option value="select">SelectionSort</option>
                    <option value="bubble">BubbleSort</option>
                    <option value="quick">QuickSort</option>
                  </select>
                </div>
              </div>
              <div class="col-2">
                <button
                  className="visual"
                  onClick={() => this.visualize()}
                  id="visualizer"
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
function disable() {
  //generate array
  document.getElementById("random_array").disabled = true;
  document.getElementById("random_array").style.color = "red";
  document.getElementById("random_array").style.cursor = "no-drop";
  //range
  document.getElementById("myRange").disabled = true;
  document.getElementById("l1").style.color = "red";
  document.getElementById("myRange").style.cursor = "no-drop";
  //select speed
  document.getElementById("speed").disabled = true;
  document.getElementById("speed").style.color = "red";
  document.getElementById("speed").style.cursor = "no-drop";
  //select algorithm
  document.getElementById("algorithm").disabled = true;
  document.getElementById("algorithm").style.color = "red";
  document.getElementById("algorithm").style.cursor = "no-drop";
  //visualizer btn
  document.getElementById("visualizer").disabled = true;
  document.getElementById("visualizer").style.color = "red";
  document.getElementById("visualizer").style.cursor = "no-drop";
}
function enable() {
  //generate array
  document.getElementById("random_array").disabled = false;
  document.getElementById("random_array").style.color = "#ffffff";
  document.getElementById("random_array").style.cursor = "pointer";
  //range
  document.getElementById("myRange").disabled = false;
  document.getElementById("l1").style.color = "white";
  document.getElementById("myRange").style.cursor = "pointer";
  //select speed
  document.getElementById("speed").disabled = false;
  document.getElementById("speed").style.color = "black";
  document.getElementById("speed").style.cursor = "pointer";
  //select algorithm
  document.getElementById("algorithm").disabled = false;
  document.getElementById("algorithm").style.color = "black";
  document.getElementById("algorithm").style.cursor = "pointer";
  //visualizer btn
  document.getElementById("visualizer").disabled = false;
  document.getElementById("visualizer").style.color = "#ffffff";
  document.getElementById("visualizer").style.cursor = "pointer";
}
