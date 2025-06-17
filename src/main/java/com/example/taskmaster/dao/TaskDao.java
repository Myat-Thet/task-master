package com.example.taskmaster.dao;

import com.example.taskmaster.entity.Task;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;
import java.util.Optional;

public interface TaskDao extends JpaRepository<Task, Integer> {

//    Optional<Task> findByTaskName(String taskName);

    @Query("""
SELECT t FROM Task t WHERE t.isCompleted = true
""")
    List<Task> findAllCompletedTasks();

    @Query("""
SELECT t FROM Task t WHERE t.isCompleted = false
""")

    List<Task> findAllUncompletedTasks();
}
