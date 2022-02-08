// İSİM YAZDIRMA!!!
var myName = prompt("What is Your Name?");

document.querySelector("#myName").innerHTML = myName;
// İSİM YAZDIRMA!!!

// HANGİ GÜN!!!
var days = [
  "Pazar",
  "Pazartesi",
  "Salı",
  "Çarşamba",
  "Perşembe",
  "Cuma",
  "Cumartesi",
];
var dayName = days[new Date().getDay()];
// HANGİ GÜN!!!

//  SAAT!!!!!!!!!!!!!!!!
window.onload = myClock();
function myClock() {
  var display = new Date().toLocaleTimeString();
  document.querySelector("#myClock").innerHTML = display;
  setTimeout(myClock, 1000);
}
//  SAAT!!!!!!!!!!!!!!!!
