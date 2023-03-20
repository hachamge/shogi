/**
 * author: Michał Wojciechowski
 * dependency: Date.getTime() 
 * src: https://github.com/odyniec
 * modification: I abbreviated the timestamps, and exported the function (ago)
 */
export function ago(val) {
  val = 0 | ((Date.now() - val) / 1000);
  var unit,
    length = {
      sec: 60,
      min: 60,
      hr: 24,
      day: 7,
      week: 4.35,
      month: 12,
      year: 10000,
    },
    result;

  for (unit in length) {
    result = val % length[unit];
    if (!(val = 0 | (val / length[unit])))
      return result + " " + (result - 1 ? unit + "s" : unit) + ' ago';
  }
}
