/**
 * DATE Object
 * A JS date is fundamentally specified as the number of milliseconds 
 * that have elapsed since midnight on January 1, 1970, UTC.
 */

 /**
  * Date()
  * the constructor could receive parameters string but only in this format
  * 'December 17, 1995 03:24:00', and if it doesn´t receive a parameter
  * make a object with the current date. and receive number representing the 
  * milliseconds from 01-01-1970 00:00:00 to the date received.
  */
 console.log('-- constructor --');
 console.log('constructor without date = ', new Date());
 console.log('constructor with December 17, 1995 03:24:00 date = ', new Date('December 17, 1995 03:24:00'));
 console.log('constructor with 2678400000 = ', new Date(2678400000));

/**
 * Date.now()
 * this function returns in number the milliseconds
 * that have elapsed since midnight on January 1, 1970, UTC.
 */
console.log('-- now() --');
console.log('numbers of milliseconds from 01-01-1970 00:00:00 to now = ', Date.now());

/**
 * Date.parse()
 * this function receive a string  with the needed format 
 * of date January 1, 1970 or 1970-01-01 or a date valid to works, because
 * if it receive other format could returns NaN or a wrong milliseconds quantity.
 */
console.log('-- parse() --');
console.log('string December 17, 1995 03:24:00 to Date = ', Date.parse('December 17, 1995 03:24:00'))
console.log('string 1970-01-01 to Date = ', Date.parse('1970-01-01'))
console.log('string Aug 9, 1995 to Date = ', Date.parse('Aug 9, 1995'))

/**
 * Date.UTC()
 * receive numbers splitted by commas the first one represent the year
 * and the next of them are optional they are: month, day, hour, minute, seconds.
 * but it returns the number of milliseconds from 01-01-1970 to the date received (in numbers)
 * WARNING: 
 * in months start in 0
 * in days start in 1 BUT it means the last day of the month, and start to count in the day 2 received.
 * 
 */
console.log('-- UTC() --');
console.log('from 1970 to milliseconds = ', Date.UTC(1970));
console.log('from 1970, 0 to milliseconds = ', Date.UTC(1970, 0));
console.log('from 1970, 0, 1 to milliseconds = ', Date.UTC(1970, 0, 1));
console.log('from 1970, 1 to milliseconds (31 days) = ', Date.UTC(1970, 1));
console.log('from 1970, 1, 2 to milliseconds (feb 1) = ', Date.UTC(1970, 1, 2));

/**
 * date.getDate()
 * return in number the day of the current date.
 */
console.log('-- getDate() --');
const getDate_first_example = new Date('December 17, 1995 03:24:00');
const getDate_second_example = new Date(Date.UTC(1970, 2, 2));
const getDate_third_example = new Date(2678400000);
console.log('day of December 17, 1995 03:24:00 = ', getDate_first_example.getDate());
console.log('day of UTC 1970, 2, 2 (1970-02-01) = ', getDate_second_example.getDate());
console.log('day of 2678400000 (1970-01-31) = ', getDate_third_example.getDate());


/**
 * date.getDay() a better name date.getDayIntoWeek()
 * return in number the day in the week from a date.
 * starting the week in sunday, index 0
 * ...
 * finishing the week in saturday, index 6
 */
console.log('-- getDay() --');
const getDay_first_example = new Date('December 17, 1995 03:24:00');
const getDay_second_example = new Date(Date.UTC(1970, 2, 2));
const getDay_third_example = new Date(2678400000);
console.log('day of Sun December 17, 1995 03:24:00 = ', getDay_first_example.getDay());
console.log('day of UTC 1970, 2, 2 (1970-02-01) = ', getDay_second_example.getDay());
console.log('day of 2678400000 (1970-01-31) = ', getDay_third_example.getDay());