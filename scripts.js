
let agregarTODO = document.getElementById("agregarTODO");
let arrayTask = ["snieg"];

arrayTask.forEach(item => {

    console.log(arrayTask[0])
    let inputTask = document.getElementById("inputTask").value;

    let divTask = document.createElement("div");

    let divForm = document.createElement("div");

    let div = document.createElement("div");

    let checkbox = document.createElement("input");

    var text = document.createElement("label");

    divTask.id = "task";
    divTask.className = "input-group mb-3";
    divForm.className = "input-group-text";
    checkbox.type = "checkbox";
    checkbox.className = "form-check-input mt-0";
    checkbox.ariaLabel = "Checkbox for following text input";
    text.className = "p-3 bg-info bg-opacity-10 border border-info border-start-0 rounded-end text"
    if (inputTask != "") {
        text.innerHTML = inputTask;
        divTask.appendChild(divForm);
        divTask.appendChild(text);
        divForm.appendChild(div);
        div.appendChild(checkbox);
        document.body.appendChild(divTask);
        console.log(divTask);
    }
})

agregarTODO.onclick = () => {
    

    let inputTask = document.getElementById("inputTask").value;

    let divTask = document.createElement("div");

    let divForm = document.createElement("div");

    let div = document.createElement("div");

    let checkbox = document.createElement("input");

    var text = document.createElement("label");

    var seTocoElBoton = true;
    divTask.id = "task";
    divTask.className = "input-group mb-3";
    divForm.className = "input-group-text";
    checkbox.type = "checkbox";
    checkbox.className = "form-check-input mt-0";
    checkbox.ariaLabel = "Checkbox for following text input";
    text.className = "p-3 bg-info bg-opacity-10 border border-info border-start-0 rounded-end text"
    if (inputTask != "") {
        text.innerHTML = inputTask;
        divTask.appendChild(divForm);
        divTask.appendChild(text);
        divForm.appendChild(div);
        div.appendChild(checkbox);
        document.body.appendChild(divTask);
        console.log(divTask);
        arrayTask.push(divTask.value)
    }
    
    checkbox.addEventListener("click", function() {
        if(seTocoElBoton) {
            text.style.textDecoration = "line-through";
            seTocoElBoton = false;
        } else {
            text.style.textDecoration = "none";
            seTocoElBoton = true;
        }
    })
}  

