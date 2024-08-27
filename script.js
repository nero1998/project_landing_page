const time = new Date();
console.log(time);
time.getFullYear();
document.querySelector(
  ".year"
).innerHTML = `The Odin Project ${time.getFullYear()}`;
