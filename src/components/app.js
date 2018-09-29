import React, { Component } from "react";
import ListOfSongs from "./ListOfSongs.js";
import FilterOptions from "./filterOptions.js";
import Filters from "./filters.js";

export default class MusicTable extends Component {
  constructor(props) {
    super(props);

    this.state = {
      opt: [
        { filter_name: "name", value: "All" },
        { filter_name: "ganre", value: "All" },
        { filter_name: "year", value: "All" }
      ],
      row_sort: "author",
      doReverse: false,
      pageSelectorsList: [5, 10, 25, 50, 100],
      currentPage: 1,
      songPerPage: 5
    };
  }

  handlePageClick = event => {
    this.setState({ currentPage: event.target.id });
  };

  changeShowCount = event => {
    this.setState({ songPerPage: event.target.id, currentPage: 1 });
  };

  handleFilterColumn = whatToFilter => {
    if (this.state.row_sort == whatToFilter) {
      this.setState({ doReverse: !this.state.doReverse });
    } else {
      this.setState({ row_sort: whatToFilter });
    }
  };

  // select filters handler here (author, ganre ,year). This is for
  // sending selected options to filter function to filter data
  handleFilterList = (filter_name, value) => {
    let newOpt = this.state.opt.map(item => {
      if (item.filter_name == filter_name) {
        return { filter_name, value };
      }
      return item;
    });

    this.setState({ opt: newOpt, currentPage: 1 });
  };

  render() {
    const { currentPage, songPerPage, opt, row_sort, doReverse } = this.state;
    // filter array here: depends on selected options and how it should be sorted
    const filteredSongs = Filters.filterSearch(opt, row_sort, doReverse);

    const indexOfLastTodo = currentPage * songPerPage;
    const indexOfFirstTodo = indexOfLastTodo - songPerPage;
    const currentSongs = filteredSongs.slice(indexOfFirstTodo, indexOfLastTodo);

    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(filteredSongs.length / songPerPage); i++) {
      pageNumbers.push(i);
    }

    const renderPageNumbers = pageNumbers.map(number => {
      return (
        <li key={number} id={number} onClick={this.handlePageClick} style={+number === +currentPage ? {color:'red'} : {color:'black'}}>
          {number}
        </li>
      );
    });

    const pageSelectors = this.state.pageSelectorsList.map(item => {
      return (
        <li key={item} id={item} onClick={this.changeShowCount} style={+item === +songPerPage ? {color:'red'} : {color:'black'}}>
          {item}
        </li>
      );
    });

    return (
      <div>
        <div className="row">

          <div className="row content_data">

            <div className="medium-10 column">
              <ListOfSongs
                goods={currentSongs}
                searchByCol={this.handleFilterColumn}
              />
            </div>

            <div className="medium-2 column">
              <FilterOptions filterOptionsList={this.handleFilterList}/>
            </div>

          </div>
          <div className="table-control">
            <ul className="page-numbers">{renderPageNumbers}</ul>
            <ul className="page-selectors">{pageSelectors}</ul>
          </div>
        </div>

      </div>
    );
  }
}
