let decemberDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

const createDaysOfTheMonth = () => {
  let days = document.getElementById ('days');
  for (let index = 0; index < decemberDaysList.length; index += 1) {
    let dayList = document.createElement ('li');
    dayList.className = 'day';
    dayList.innerHTML = decemberDaysList[index];
    days.appendChild(dayList);
    console.log(days)
  }
}