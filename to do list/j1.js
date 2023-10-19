let inputbox = document.getElementById("input");
let list = document.getElementById("list");
function addtask() {
    if (inputbox.value == '') {
        alert("you must write something");
    }
    else {

        let li = document.createElement("li");
        li.innerHTML = inputbox.value;

        list.appendChild(li);

        inputbox.value = " ";
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }

}
list.addEventListener("click", function (e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("task");



    }
    else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();


    }
}, false);


