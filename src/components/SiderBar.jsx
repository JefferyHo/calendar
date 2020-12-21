import React, { Component } from 'react';
import {labelList} from '../utils/config';
import moment from 'moment';
import Calender from '../components/Calendar';
import './index.less';

class ActionBar extends Component {
  constructor(props) {
    super(props)

    this.state = {
      currentDate: undefined,
    }
  }

  handleToggle(ind) {
    const { currentDate = moment() } = this.state;
    this.setState({
      currentDate: currentDate.add(ind, 'month')
    })
  }

  render() {
    const { currentDate } = this.state;
    return <div className="sider-wpt">
      <div className="top">
        <div className="title">我的标签</div>
        <div className="label-list">
          {
            labelList.map(item => (
              <div className="label-item" key={item.id}>
                <span className="color-block" style={{ backgroundColor: item.color }}></span>
                <span className="text">{ item.label }</span>
              </div>
            ))
          }
        </div>
      </div>
      <div className="bottom">
          <div className="slide">
            <span className="btn" onClick={this.handleToggle.bind(this, -1)}>&lt;</span>
            <span>{moment(currentDate).format("YYYY年MM月")}</span>
            <span className="btn" onClick={this.handleToggle.bind(this, 1)}>&gt;</span>
          </div>
          <div className="btm-calendar-wpt">
            <Calender date={currentDate} isThumb={false} />
          </div>
      </div>
    </div>
  }
}

export default ActionBar;