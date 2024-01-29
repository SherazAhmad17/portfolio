document.querySelector('.clock');

function time(){
    var date= new Date();
    document.querySelector('.clock').innerHTML=date.toLocaleTimeString()
}

setInterval(time, 1000);

  