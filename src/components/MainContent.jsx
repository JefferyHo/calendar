import React, { Component } from 'react';
import Calendar from '../components/Calendar';
import { mapDateToZone } from '../utils/calculate';
import moment from 'moment';

class ContactList extends Component {

  constructor(props) {
    super(props);

    this.state = {
      currentDate: undefined,
      data: []
    }

    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(e, data) {
    let target = e.nativeEvent.path[0];
    let targetParent = e.nativeEvent.path[1];
    let index = [].indexOf.call(targetParent.children, target);
    console.log(index);
  }

  render() {
    const { currentDate, data } = this.state;
    return <>
      <div className="title">{moment(currentDate).format("YYYY年MM月")}</div>
      <div className="calendar-full-wpt">
        <Calendar
          date={currentDate}
          isThumb={true}
          handleClick={this.handleClick}
          data={data}
        />


      </div>
    </>
  }
}

export default ContactList;