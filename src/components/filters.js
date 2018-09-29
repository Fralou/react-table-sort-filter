import Songs from './data.js';
import _ from 'lodash';

export default {
  filterSearch(opt, column, rev) {

    // list of all data here
    let list = Songs;

    let author = opt[0].value;
    let ganre = opt[1].value;
    let year = opt[2].value;
    let doReverse = rev;

    //filter by options here
    //by author
    let arrFirst = [];
    if(author != "All") {
      list.filter(item => {
        if(author == item.name) arrFirst.push(item);
      });
    } else if(author == "All"){
      arrFirst = list;
    }

    //by ganre
    let arrSecond = [];
    if(ganre != "All") {
      arrFirst.filter(item => {
        if(ganre == item.ganre) arrSecond.push(item);
      });
    } else {
      arrSecond = arrFirst;
    }

    //by year
    let arrThird = [];
    if(year != "All") {
      arrSecond.filter(item => {
        if(year == item.year) arrThird.push(item);
      });
    } else {
      arrThird = arrSecond;
    }

    // filter by column here
    let sortedmusic = [];
    if(doReverse){
      sortedmusic = _.sortBy(arrThird, column).reverse();
    } else {
      sortedmusic = _.sortBy(arrThird, column);
    }

    return sortedmusic;
  }
};
