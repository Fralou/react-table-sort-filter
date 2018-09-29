import React from 'react';

const SingleRow = (props) => {
  const {id, name, song, ganre, year} = props.gooditem;
  return (
    <tr>
      <td className="name-row">{name}</td>
      <td className="song-row">{song}</td>
      <td className="ganre-row">{ganre}</td>
      <td className="year-row">{year}</td>
    </tr>
  );
};

export default SingleRow;
