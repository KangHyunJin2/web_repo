//Calendar.js


function makeCalendar(calendar) {
    let day = '';
    day += '<tr>';
    for(let prop in calendar){
        day += '<td>' + calendar[prop] + '</td>';
    }
    day += '</tr>';
    return day;
}

// makeHtml(calAry) {
//     let table = '<table border="1"><tbody>';
//     table += calAry.reduce((acc, cal) => {});

//     table += '</tbody></table>';
// }

const calendars = [
   week = {일,월,화,수,목,금,토}
]

week.makeHtml(calendars);