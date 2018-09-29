import React, { Component } from "react";
import SingleRow from "./SingleRow";

const tableNames = [
  { name: "name", value: "Singer" },
  { name: "song", value: "Song" },
  { name: "ganre", value: "Ganre" },
  { name: "year", value: "Year" }
];

export default class ListOfSongs extends Component {
  tableCheck(text) {
    this.props.searchByCol(text);
  }

  render() {
    const tableCell = tableNames.map(item => (
      <th key={item.name} onClick={() => this.tableCheck(item.name)}>
        {item.value}
      </th>
    ));

    const musicRows = this.props.goods.map(item => {
      return <SingleRow key={item.id} gooditem={item} />;
    });

    //  Shows list of items
    return (
      <table>
        <thead>
        <tr>{tableCell}</tr>
        </thead>
        <tbody>{musicRows}</tbody>
      </table>
    );
  }
}
