var countDownDate = new Date("Oct 24, 2024 00:00:00").getTime();

var x = setInterval(function() {
    var now = new Date().getTime();
    var distance = countDownDate - now;
    
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    if (distance < 0) {
        clearInterval(x);
        document.getElementById("count").style.display = "none";
        document.getElementById("text").innerText = "Happy Birthday My Cute & ______ Friend 😁😁";
        document.title = "Happy Birthday";
    }

    document.getElementById('day').innerText = days ;
    document.getElementById('hour').innerText = hours ;
    document.getElementById('minute').innerText = minutes ;
    document.getElementById('second').innerText = seconds ;

})
