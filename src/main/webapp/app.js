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

function updateTable(items) {
    $('#todoTable').empty();

    $.each(items, function( index, item ) {
        var table = document.getElementById('todoTable');
        var button = "<button id=" + item.taskId + " onClick=deleteTask(" + item.taskId + ")>Delete<button>";
        $('#todoTable').append( "<tr><td>" + item.taskDescription + "</td><td>" + item.taskStatus + "</td><td>" +button+ "</tr>" );
    });
}

function deleteTask(id) {
    deleteTodo(id);
}
