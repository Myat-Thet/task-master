package com.example.taskmaster.service;

import com.example.taskmaster.dao.TaskDao;
import com.example.taskmaster.entity.Task;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Objects;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class TaskService {

    private final TaskDao  taskDao;

    public void deleteById(Integer id) {
        taskDao.deleteById(id);
    }

    public Task completedTask(Integer id) {
        Task task = taskDao.findById(id).orElse(null);
        if (Objects.nonNull(task)) {
            task.setCompleted(true);
            return taskDao.save(task);
        }
        return null;
    }
    public Task uncompletedTask(Integer id) {
        Task task = taskDao.findById(id).orElse(null);
        if (Objects.nonNull(task) )  {
            task.setCompleted(false);
            return taskDao.save(task);
        }
        return null;
    }

    public List<Task> findAll() {
        return taskDao.findAll();
    }

    public Task findById(Integer id) {
        return taskDao.findById(id).orElse(null);
    }

    public Task save(Task task) {
        return taskDao.save(task);
    }

}
