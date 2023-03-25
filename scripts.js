let agregarTODO = document.getElementById("agregarTODO");

agregarTODO.addEventListener("click", function() {
    let divTask = document.createElement("div");

    let divForm = document.createElement("div");

    let div = document.createElement("div");

    let checkbox = document.createElement("input");

    let input = document.createElement("input");
    
    divTask.id = "task";
    divTask.className = "input-group mb-3";
    divForm.className = "input-group-text";
    checkbox.type = "checkbox";
    checkbox.className = "form-check-input mt-0";
    checkbox.ariaLabel = "Checkbox for following text input";
    input.type = "text";
    input.className = "form-control";
    input.ariaLabel = "Text input with checkbox";
    divTask.appendChild(divForm);
    divTask.appendChild(input);
    divForm.appendChild(div);
    div.appendChild(checkbox);
    document.body.appendChild(divTask);
    console.log(divTask);
} )


