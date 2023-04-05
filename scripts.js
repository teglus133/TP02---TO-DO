
let agregarTODO = document.getElementById("agregarTODO");
let tareasDiv = document.getElementById("tareas");
let botonTareaMasRapida = document.getElementById("tareaMasRapida");
let arrayTask = [];
    agregarTODO.onclick = () => {
        tareasDiv.innerHTML = "";

        
        let inputTask = document.getElementById("inputTask").value

        let divTask = document.createElement("div");
    
        let divForm = document.createElement("div");
    
        let div = document.createElement("div");
    
        var checkbox = document.createElement("input");
    
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
            var fechaCreacionTiempo = new Date();
            arrayTask.push({texto: inputTask, fechaCreacion: fechaCreacionTiempo, estado:false, fechaTachado: null});
            console.log(arrayTask)
        }
        arrayTask.forEach(item => {
            let inputTask = item.texto;
        
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
            text.className = "p-3 bg-info bg-opacity-10 border border-info border-start-0 rounded-end text";
            if(item.estado) {
                text.style.textDecoration = "line-through";
                checkbox.checked = true;
            }
            if (inputTask != "") {
                text.innerHTML = inputTask;
                divTask.appendChild(divForm);
                divTask.appendChild(text);
                divForm.appendChild(div);
                div.appendChild(checkbox);
                tareasDiv.appendChild(divTask);
            }
            checkbox.addEventListener("click", function() {
                console.log(item.texto);
                item.estado = !item.estado;
                if(item.estado) {
                    text.style.textDecoration = "line-through";
                    item.fechaTachado = new Date();
                    console.log(arrayTask);
                } 
                if(!item.estado)
                {
                    text.style.textDecoration = "none";

                }
                console.log(item.estado);
            })  
        })
}

botonTareaMasRapida.onclick = () => {
    let tiempoMenor = 9999999999999;
    let tareaMenor;
    arrayTask.forEach(item => {
        if(item.fechaTachado != null)
        {
            let tiempoEnRealizarse = item.fechaTachado - item.fechaCreacion;
            console.log(tiempoEnRealizarse);
            if (tiempoEnRealizarse < tiempoMenor) {
                tiempoMenor = tiempoEnRealizarse;
                tareaMenor = item;
            }
        }
    })
    tareaRapida = document.getElementById("textoTareaRapida")
    tareaRapida.innerHTML = 'La tarea mas rapida fue'+' ' +tareaMenor.texto;
}

