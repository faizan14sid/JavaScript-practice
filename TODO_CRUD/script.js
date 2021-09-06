function onFormSubmit() {
    var formData = readFormData();
    if (selectedRow == null) {
        insertNewRecord(formData);
    }
    else {
        updateRecord(formData);
        resetForm();
    }
}

function readFormData() {
    var formData = {};

    formData["todo"] = document.getElementById("todo").value;
    return formData;
}

function insertNewRecord(data) {
    var table = document.getElementById("todoList").getElementsByTagName("tbody")[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.todo;
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = ` <a onclick="onEdit(this)"> Edit</a>
                        <a onclick="onDelete(this)">Delete</a>`
}