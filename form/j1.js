let billtotal = document.getElementById("billtotal");
let tip = document.getElementById("tip");
let add = document.getElementById("add");
let sub = document.getElementById("sub");
let amt = document.getElementById("final");
let t = 0;

add.onclick = function addPeople() {
    t = billtotal.value + (tip.value * billtotal.value) / 100;
    amt.innerHTML = t;
}