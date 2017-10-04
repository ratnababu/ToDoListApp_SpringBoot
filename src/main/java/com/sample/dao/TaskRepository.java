package com.sample.dao;

import com.sample.model.Task;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.web.bind.annotation.CrossOrigin;

@CrossOrigin
@RepositoryRestResource(collectionResourceRel = "add", path = "add")
public interface TaskRepository extends CrudRepository<Task, Long> {

}

