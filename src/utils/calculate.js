import moment from 'moment';
/**
 * 计算一个日期是第几个格子
 *
 * @param {*} date
 * @param {*} initDate
 * @return {Number} 
 */
export const mapDateToZone = (date, initDate = new Date()) => {
  if(!moment.isMoment(date)) {
    date = moment(date);
  }

  let monthFirstDay = getCurrentFirstDay(initDate);
  // console.log(monthFirstDay.format("MM-DD"));
  return moment(date).diff(monthFirstDay, 'days');
}
/**
 * 获取日历矩阵的第一个日期
 *
 * @param {*} date
 * @return {Moment} 
 */
const getCurrentFirstDay = (date) => {
  let monthFirstDay = moment(date).startOf("month"),
    currentWeek,
    firstDay;
  currentWeek = monthFirstDay.weekday();
  firstDay = monthFirstDay.add(-currentWeek, 'days');
  return firstDay;
}

/**
 * 生成日历矩阵
 *
 * @param {*} [date=new Date()]
 * @return {Array} 
 */
export const generateDates = (date = new Date()) => {
  let firstDay = getCurrentFirstDay(date);
  let arr = [];
  for(let i = 0; i < 42; i++) {
    arr.push(moment(firstDay).add(i, 'days').format("YYYY-MM-DD"));
  }
  return arr;
}