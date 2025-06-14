package com.example.taskmaster.dao;

import com.example.taskmaster.entity.Task;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;
import java.util.Optional;

public interface TaskDao extends JpaRepository<Task, Integer> {

    @Query("""
select t from Task t where t.isCompleted = true
""")
    List<Task> findAllCompletedTasks(@Param("taskId") Integer taskId);

    @Query("""
select t from Task t where  t.isCompleted = false 
    """)
    List<Task> findAllUncompletedTasks(@Param("taskId") Integer taskId);

    List<Task> id(int id);
}
