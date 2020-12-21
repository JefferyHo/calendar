import React, { Component } from 'react';
import Calendar from '../components/Calendar';
import moment from 'moment';

class ContactList extends Component {

    constructor(props) {
        super(props);

        this.state = {
            currentDate: undefined 
        }

        this.handleClick = this.handleClick.bind(this)
    }

    handleClick(e) {
        console.log(e);
    }

    render () {
        const { currentDate } = this.state;
        return <>
            <div className="title">{ moment(currentDate).format("YYYY年MM月") }</div>
            <div className="calendar-full-wpt">
                <Calendar date={currentDate} isThumb={true} handleClick={this.handleClick} />
            </div>
        </>
    }
}

export default ContactList;