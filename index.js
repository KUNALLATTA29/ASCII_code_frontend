function update(){
  let clock = document.getElementById("clock");
  let now  = new Date();

  let h = String(now.getHours()).padStart(2,'0');
  let m = String(now.getMinutes()).padStart(2,'0');
  let s = String(now.getSeconds()).padStart(2,'0');

  clock.innerText = `${h}:${m}:${s}`;


}
update();
setInterval(update, 1000);