
var minutes = 00;
var seconds = 00;
var cs = 00;
var displayCs = 0;
var displaySeconds = 0;
var displayMinutes = 0;
var interval = null;
var status = "stopped"

function stopWatch() {

    cs++;
    if(cs / 100 === 1){
        cs = 00;
        seconds++;

        if(seconds / 60 === 1){
            seconds = 00;
            minutes++;
        }
        
    }

     if(cs < 10){
         displayCs = "0" + cs.toString();
     }
     else{
         displayCs = cs;
     }
     if(seconds < 10){
        displaySeconds = "0" + seconds.toString();
    }
     else{
        displaySeconds = seconds;
    }     
    if(minutes < 10){
        displayMinutes = "0" + minutes.toString();
    }
    else{
        displayMinutes = minutes;
    }

      document.getElementById("cs").innerHTML = displayCs;
      document.getElementById("seconds").innerHTML = displaySeconds;
      document.getElementById("minutes").innerHTML = displayMinutes;
}


function start() {

    if(status === "stopped"){

        interval = window.setInterval(stopWatch, 10);
        status = "started"
    }
}

function stop() {
    if(status === "started"){
        window.clearInterval(interval);
        status = "stopped"
    }
}

function reset() {
    window.clearInterval(interval);
    cs = 0;
    seconds = 0;
    minutes = 0;
    document.getElementById("cs").innerHTML = "0" + cs;
    document.getElementById("seconds").innerHTML = "0" + seconds;
    document.getElementById("minutes").innerHTML = "0" + minutes;
    } 


