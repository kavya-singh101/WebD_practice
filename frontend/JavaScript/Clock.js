function clock() {
    let time = new Date();
    console.log(time);
    document.getElementById('clock').innerHTML = time;

}
setInterval(clock, 1000);