function calcTime(start, end, hr) {
  var startSplit = start.split(":");
  var endSplit = end.split(":");
  var startHours = startSplit[0];
  var startMinutes = startSplit[1];
  var endHours = endSplit[0];
  var endMinutes = endSplit[1];
  var hourRate = hr;

  startHours = startHours % 12 || 12;
  endHours = endHours % 12 || 12;

  if (Number(startMinutes) > Number(endMinutes)) {
    endHours = Number(endHours) - 1;
    endMinutes = Number(endMinutes) + 60;
  }

  var minutesResult = Math.abs(endMinutes - startMinutes);
  var hoursResult = Math.abs(startHours - endHours);

  var duration = `${hoursResult}:${minutesResult}`;

  var allMinutes = hoursResult * 60 + minutesResult;
  var amount = allMinutes * (hourRate / 60);
  return {
    duration,
    allMinutes,
    amount,
  };
}
module.exports = calcTime;
