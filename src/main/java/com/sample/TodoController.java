package com.sample;

import com.sample.dao.TaskRepository;
import com.sample.model.Task;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/add")
public class TodoController
{
    @Autowired
    private TaskRepository taskRepository;

    @GetMapping(produces = "application/json" )
    public ResponseEntity<List<Task>> getTaskDetails()
    {
        List<Task> taskList = new ArrayList<>();
        taskRepository.findAll().forEach(
                taskList::add);
        return ResponseEntity.ok(taskList);
    }

    @PostMapping(produces = "application/json", consumes = "application/json")
    public ResponseEntity<List<Task>> saveTaskDetails(
            @RequestBody Task task)
    {

        List<Task> taskList = new ArrayList<>();
        taskRepository.save(task);

        taskRepository.findAll().forEach(
                taskList::add);
        return ResponseEntity.ok(taskList);
    }

    @DeleteMapping
    public ResponseEntity<List<Task>> deleteTask(
            @RequestBody Task task)
    {
        List<Task> taskList = new ArrayList<>();
        taskRepository.delete(task);

        taskRepository.findAll().forEach(
                taskList::add);
        return ResponseEntity.ok(taskList);
    }

}
