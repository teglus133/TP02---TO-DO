
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
            var today = new Date();
            var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
            var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
            var dateTime = date+' '+time;
            arrayTask.push({texto: inputTask, fechaCreacion: dateTime, estado:false, fechaTachado: null});
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
                    var today = new Date();
                    var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
                    var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
                    var dateTime = date+' '+time;
                    item.fechaTachado = dateTime;
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
    arrayTask.forEach(item => {
        let fechaTachadoMen = new Date(2023, 12, 31, 23, 59, 59)
        console.log(fechaTachadoMen)
        console.log(item.fechaTachado)
        if(item.fechaTachado != null)
        {
            console.log(Number(fechaTachadoMen - item.fechaTachado))
            if (item.fechaTachado < fechaTachadoMen) {
                fechaMasRapida2 = item.fechaTachadoMen
            }
        }
    })

}


