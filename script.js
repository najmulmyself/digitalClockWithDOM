let hr = document.getElementById('hour');
let min = document.getElementById('minute');
let sec = document.getElementById('second');
let progressBar = document.getElementById('progress');

function showTime(){
    let date = new Date();
    let hour = date.getHours();
    let minute = date.getMinutes();
    let second = date.getSeconds();

    hr.innerText = hour;
    min.innerText = minute;
    sec.innerText = second;

    progressBar.style.width = (second/60) * 100 + '%' ;
}
setInterval(showTime,1000);