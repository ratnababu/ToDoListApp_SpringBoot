package com.sample.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Task
{

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long taskId;
    @Column(name = "NAME")
    private String taskDescription;
    @Column(name = "STATUS")
    private String taskStatus;

    public Task()
    {

    }

    public Task(long taskId, String taskDescription, String taskStatus)
    {
        super();
        this.taskId = taskId;
        this.taskDescription = taskDescription;
        this.taskStatus = taskStatus;
    }

    public long getTaskId()
    {
        return taskId;
    }

    public void setTaskId(long taskId)
    {
        this.taskId = taskId;
    }

    public String getTaskDescription()
    {
        return taskDescription;
    }

    public void setTaskDescription(String taskDescription)
    {
        this.taskDescription = taskDescription;
    }

    public String getTaskStatus()
    {
        return taskStatus;
    }

    public void setTaskStatus(String taskStatus)
    {
        this.taskStatus = taskStatus;
    }

    @Override
    public String toString()
    {
        return "Task [id=" + taskId + ", taskDescription=" + taskDescription
                + ", taskStatus=" + taskStatus + "]";
    }

}
