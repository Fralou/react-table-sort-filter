import React, { Component } from "react";
import data from "./data.js";

export default class FilterOptions extends Component {
  clickHandler = e => {
    this.props.filterOptionsList(e.target.name, e.target.value);
  };

  render() {
    let [arrS, singer, arrG, ganre, arrY, year] = [[], [], [], [], [], []];

    data.forEach(item => {
      if (arrS.indexOf(item.name) === -1) {
        arrS.push(item.name);
        singer.push(<option key={item.id}>{item.name}</option>);
      }
      if (arrG.indexOf(item.ganre) === -1) {
        arrG.push(item.ganre);
        ganre.push(<option key={item.id}>{item.ganre}</option>);
      }
      if (arrY.indexOf(item.year) === -1) {
        arrY.push(item.year);
        year.push(<option key={item.id}>{item.year}</option>);
      }
    });

    return (
      <div className="checkboxes">
        <form onChange={this.clickHandler}>
          <p className="check_option">Singer:</p>
          <select name="name">
            <option>All</option>
            {singer}
          </select>

          <p className="check_option">Ganre:</p>
          <select name="ganre">
            <option>All</option>
            {ganre}
          </select>

          <p className="check_option">Year:</p>
          <select name="year">
            <option>All</option>
            {year}
          </select>
        </form>
      </div>
    );
  }
}
