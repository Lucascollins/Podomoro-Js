const minuteDown = document.getElementById('minutess')
const secondDown = document.getElementById('secondss')
var timeValue = document.getElementById("timevalue")


var startM;
var time;
var interval;
var input = 1

  
function starTimer(){
    clearInterval(interval)
    startM = Number(timeValue.value)
    time = startM * 60    
    interval = setInterval(updatedown,1000)
    timeValue.value = time/60
}

function pausar(){
    clearInterval(interval) 
    if(input % 2 == 0){
        interval = setInterval(updatedown,1000)
}
    input++;
}


function updatedown(){

    let minutes = Math.floor(time / 60) %60
    let seconds = Math.floor(time %60);

    seconds = seconds <10 ? "0" +seconds : seconds;
    minutes = minutes <10 ? "0" +minutes : minutes;

    minuteDown.innerHTML = `${minutes}`;
    secondDown.innerHTML = `${seconds}`;

    time--;
    if(time <= -1){
        clearInterval(interval)
    };
}



function formatTimer(time){
    time = time <10 ? `0${time}`: t
}

