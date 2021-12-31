let selectedRow = null;

function onFormSubmit(){
    if(validate()){
        let formData = readFormData();
    if(selectedRow == null){
        insertNewRecord(formData);
    }else{
        updateRecord(formData)
    }
    
    resetForm();
    }
}

function readFormData(){
    let nombre = document.getElementById("nombre").value;
    let edad = document.getElementById("edad").value;
    let deporte = document.getElementById("deporte").value;

    let formData = {
        nombre,
        edad,
        deporte
    }

    return formData;
}

function insertNewRecord(data){
    let table = document.getElementById("Alumnos").getElementsByTagName('tbody')[0];
    let newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.nombre;
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.edad;
    cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.deporte;
    cell4 = newRow.insertCell(3);
    cell4.innerHTML =  `<a onClick="onEdit(this)">Editar</a>
                       <a onClick="onDelete(this)">Eliminar</a>`
}

function resetForm(){
    document.getElementById("nombre").value = "";
    document.getElementById("edad").value = "";
    document.getElementById("deporte").value = "";
    selectedRow = null;
}

function onEdit(td){
    selectedRow = td.parentElement.parentElement;
    document.getElementById("nombre").value = selectedRow.cells[0].innerHTML;
    document.getElementById("edad").value = selectedRow.cells[1].innerHTML;
    document.getElementById("deporte").value = selectedRow.cells[2].innerHTML;
}

function updateRecord(formData){
    selectedRow.cells[0].innerHTML = formData.nombre;
    selectedRow.cells[1].innerHTML = formData.edad;
    selectedRow.cells[2].innerHTML = formData.deporte;
}

function onDelete(td){
    if(confirm('¿Quieres eliminar este elemento?')){
        row = td.parentElement.parentElement;
        document.getElementById("Alumnos").deleteRow(row.rowIndex);
        resetForm();
    }
}
function validate(){
    isValid = true;
    if(document.getElementById("nombre").value == ""){
        isValid = false;
        document.getElementById("nameError").classList.remove("hide");
    }else{
        isValid = true;
        if (!document.getElementById("nameError").classList.contains("hide")){
            document.getElementById("nameError").classList.add("hide")
        }
    }
    return isValid;
}

