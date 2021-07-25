import moment from 'moment';
import { generateDates } from '../utils/calculate';

const weekdays = ["日", "一", "二", "三", "四", "五", "六"];
/**
 * 生成日历矩阵
 *
 * @param {DateString} date
 * @param {boolean} [isThumb=true]
 * @return {Dom} 
 */
const calender = ({ date = new Date(), isThumb = false, handleClick }) => {
  let arr = generateDates(date);
  
  return <div className="calendar-wpt">
    <div className="weekdays">
      {
        weekdays.map(item => <span key={item}>{ (isThumb ? '周' : '') + item}</span>)
      }
    </div>
    <div className="days">
      {
        arr.map(item => 
        <span 
          key={item} 
          onClick={e => handleClick(e, item)}
          className={[
            moment(item).isSame(new Date(), 'day') ? 'now' : undefined,
            moment(item).isSame(date, 'month') ? undefined : 'not-current',
            moment(item).weekday() === 0 || moment(item).weekday() === 6 ? 'weekend' : undefined,
          ].join(" ")}
          >
          {
            moment(item).date()
          }
        </span>)
      }
    </div>
  </div>;
};

export default calender;