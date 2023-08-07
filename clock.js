setInterval(() => {
    let date = new Date();
    let hour = date.getHours();
    let min = date.getMinutes();
    let sec = date.getSeconds();
    let hroto = 30 * hour + min/2;
    let mroto = 6 * min;
    let sroto = 6 * sec;
   let hourr = document.getElementById("hour");
    hourr.style.transform = `rotate(${hroto}deg)`


    let minn = document.getElementById("min");
    minn.style.transform = `rotate(${mroto}deg)`



    let secc = document.getElementById("sec");
    secc.style.transform = `rotate(${sroto}deg)`





}, 1000);


// -----------------------------------------


setInterval(() => {
    let date = new Date();
    let hour = date.getHours();
    let min = date.getMinutes();
    let sec = date.getSeconds();
    let misec = date.getUTCMilliseconds();

    let hr = document.getElementById("dighr").innerHTML = hour;
    let minn = document.getElementById("digmin").innerHTML = min;
    let secc = document.getElementById("digsec").innerHTML = sec;
    let misecc = document.getElementById("milsec").innerHTML = misec;
    
    
}, 0);