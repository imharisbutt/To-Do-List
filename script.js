let textInput3 = document.getElementById("textInput3");
let Btn = document.getElementById("Btn");
let tasklist = document.getElementById("tasklist");
Btn.addEventListener("click", function () {
    let task = textInput3.value;
    if (task === "") {
        alert("Please enter a task");
    }else {
        let li = document.createElement("li");
        li.textContent = task;
        tasklist.appendChild(li);
        textInput3.value = "";
    }   
});