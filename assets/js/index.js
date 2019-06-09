

var countDownDate = new Date("30 June 2019 19:00").getTime();

var countdownfunction = setInterval(function() {

   
    var now = new Date().getTime();
    
    
    var distance = countDownDate - now;
    
   
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
   
    document.getElementById("timer").innerHTML = days + "d " + hours + "h "
    + minutes + "m " + seconds + "s ";
    
 
    if (distance < 0) {
        clearInterval(countdownfunction);
        document.getElementById("timer").innerHTML = "Over";
    }
        }, 1000);
