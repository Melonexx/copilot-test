const greeting = document.getElementById("greeting");
const time = document.getElementById("time");
const hour = new Date().getHours().toString().padStart(2, "0");
const minute = new Date().getMinutes().toString().padStart(2, "0");

time.innerHTML = `${hour}:${minute}`;

if (hour >= 6 && hour < 12) {
  greeting.innerHTML = "Good morning!";
  document.body.style.background = "#f7daec";
} else if (hour >= 12 && hour < 18) {
  greeting.innerHTML = "Good afternoon!";
  document.body.style.background = "#ebccf7";
} else if (hour >= 18 && hour < 24) {
  greeting.innerHTML = "Good evening!";
  document.body.style.background = "#cccff7";
} else {
  greeting.innerHTML = "Good night!";
  document.body.style.background = "#ccebf7";
}
