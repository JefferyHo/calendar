import moment from 'moment';

const weekdays = ["日", "一", "二", "三", "四", "五", "六"];
/**
 * 生成日历矩阵
 *
 * @param {DateString} date
 * @param {boolean} [isThumb=true]
 * @return {Dom} 
 */
const calender = ({ date = new Date(), isThumb = false, handleClick }) => {
  if(!moment.isMoment(date)) {
    date = moment(date);
  }
  // get the first day of month display
  let monthFirstDay = moment(date).startOf("month"),
    currentWeek,
    firstDay;
  currentWeek = monthFirstDay.weekday();
  firstDay = monthFirstDay.add(-currentWeek, 'days');
  let arr = [];
  for(let i = 0; i < 42; i++) {
    arr.push(moment(firstDay).add(i, 'days').format("YYYY-MM-DD"));
  }
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
          onClick={e => handleClick(item)}
          className={[
            moment(item).isSame(new Date(), 'day') ? 'now' : undefined,
            moment(item).isSame(date, 'month') ? undefined : 'not-current',
            moment(item).weekday() === 0 || moment(item).weekday() === 6 ? 'weekend' : undefined,
          ].join(" ")}
          >
          {
            isThumb
            ? moment(item).format("MM/DD")
            : moment(item).date()
          }
        </span>)
      }
    </div>
  </div>;
};

export default calender;