const START_DATE = new Date("July 07, 2024 00:00:00");

document.getElementById('details').style.visibility = 'hidden';
document.getElementById('loader').style.visibility = 'visible';
document.getElementById('title').style.visibility = 'hidden';
function setTime() {
    let NOW_DATE = new Date();
    let different = NOW_DATE - START_DATE;
    let second = Math.round(different / 1000);
    let minute = 0;
    let hours = 0;
    let days = 0;
    let months = 0;
    let years = 0;
    let totalDays = 0;

    const allData = [second, minute, hours, days, months, years];

    while (second >= 60) {
        second -= 60;
        minute++;
    }
    while (minute >= 60) {
        minute -= 60;
        hours++;
    }
    while (hours >= 24) {
        hours -= 24;
        days++;
        totalDays++;
    }
    while (days >= 30) {
        days -= 30;
        months++;
    }
    while (months >= 12) {
        months -= 12;
        years++;
    }

    if (second < 10) {
        second = '0' + String(second);
    }
    if (minute < 10) {
        minute = '0' + String(minute);
    }
    if (hours < 10) {
        hours = '0' + String(hours);
    }
    if (days < 10) {
        days = '0' + String(days);
    }
    if (months < 10) {
        months = '0' + String(months);
    }
    if (years < 10) {
        years = '0' + String(years);
    }

    document.getElementById('detailsYear').textContent = `${(years)} Tahun`;
    document.getElementById('detailMonth').textContent = `${months} Bulan`;
    document.getElementById('detailDay').textContent = `${days} Hari`;
    document.getElementById('detailHour').textContent = `${hours} Jam`;
    document.getElementById('detailMinute').textContent = `${minute} Menit`;
    document.getElementById('detailSecond').textContent = `${second} Detik`;
    document.getElementById('title').textContent = `Anda Sudah Melewati ${totalDays} Hari`

    document.getElementById('details').style.visibility = 'visible';
    document.getElementById('loader').style.visibility = 'hidden';
    document.getElementById('title').style.visibility = 'visible';
}

setInterval(() => {
    setTime();
}, 1000);