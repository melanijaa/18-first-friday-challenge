const date = new Date();
const monthDay = document.querySelector('.days')
const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
];

document.querySelector('.date h1').innerHTML
= months[date.getMonth()];

let days = '';

for(let i = 1; i <= 31; i++) {
    days += `<div>${i}</div>`;
    monthDay.innerHTML = days;
}