let t = new Date("August 23, 2023 18:04:00").getTime();
let x = setInterval(function () {
    let now = new Date().getTime();
    let left = t - now ;
    let days = Math.floor(left/(1000*60*60*24));
    let hours =Math.floor((left%(1000*60*60*24))/(1000*60*60));
    let minutes =Math.floor((left%(1000*60*60))/(1000*60));
    let seconds =Math.floor((left%(1000*60))/(1000));
    document.getElementById("days").innerHTML = days < 10 ? "0" + days + "d" : days + "d";
    document.getElementById("hours").innerHTML = hours < 10 ? "0" + hours + "h" : hours + "h";
    document.getElementById("minutes").innerHTML = minutes < 10 ? "0" + minutes + "m" : minutes + "m";
    document.getElementById("seconds").innerHTML = seconds < 10 ? "0" + seconds + "s" : seconds + "s";
    if (left < 0) {
        clearInterval(x);
        document.getElementById("days").innerHTML = "00d";
        document.getElementById("hours").innerHTML = "00h";
        document.getElementById("minutes").innerHTML = "00m";
        document.getElementById("seconds").innerHTML = "00s";
    }
})
