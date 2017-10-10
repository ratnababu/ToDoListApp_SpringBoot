function add(){
    var taskDescription = document.getElementById('taskDescription').value;
    var taskStatus = document.getElementById('taskStatus').value;
    addTodo(taskDescription, taskStatus);
    updateTable();
}

function addTodo(item, taskStatus) {
    var jsonObject = {taskDescription: item, taskStatus: taskStatus};

    $.ajax({
        method: 'POST',
        url: 'http://localhost:8080/add',
        headers: {
            'Content-Type': 'application/json'
        },
        data: JSON.stringify(jsonObject),
        success: function(data) {
            updateTable(data);
        }
    });
}

function deleteTodo(id) {
    var jsonObject = {taskId: id};

    $.ajax({
        method: 'DELETE',
        url: 'http://localhost:8080/add',
        headers: {
            'Content-Type': 'application/json'
        },
        data: JSON.stringify(jsonObject),
        success: function(data) {
            updateTable(data);
        }
    });
}


function editTodo(id) {
var jsonObject = {taskId: id};

    $.ajax({
        method: 'UPDATE'
        url: 'http://localhost:8080/add',
        headers: {
            'Content-Type': 'application/json'
        },
        data: JSON.stringify(jsonObject),
        success: function(data) {
            updateTable(data);
        }
    })
}

function updateTable(items) {
    $('#todoTable').empty();
    document.getElementById('taskDescription').value = '';
    document.getElementById('taskStatus').value = '';
    $.each(items, function( index, item ) {
        var table = document.getElementById('todoTable');
        var delete_button = "<button id=" + item.taskId + " onClick=deleteTask(" + item.taskId + ")>Remove</button>";
        var edit_button = "<button id=" + item.taskId + " onClick=editTask(" + item.taskId + ")>Edit</button>";
        $('#todoTable').append( "<tr><td>" + item.taskDescription + "</td><td>" + item.taskStatus + "</td><td>" +delete_button+ "</td><td>" +edit_button+ "</tr>" );
    });
}

function deleteTask(id) {
    deleteTodo(id);
}

function editTask(id) {
editTodo(id);
}