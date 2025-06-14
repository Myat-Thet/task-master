package com.example.taskmaster.dao;

import com.example.taskmaster.entity.Task;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface TaskDao extends JpaRepository<Task, Integer> {

    Optional<Task> findByTaskName(String taskName);
}
