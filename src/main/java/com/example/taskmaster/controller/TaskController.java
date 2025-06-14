package com.example.taskmaster.controller;

import com.example.taskmaster.entity.Task;
import com.example.taskmaster.service.TaskService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDate;
import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/task")
public class TaskController {

    private final TaskService taskService;

    record TaskRequest(String taskName, String description,  LocalDate dueDate,
                       String priority) {}

    record TaskResponse(Integer id, String taskName,
                         String description,
                         LocalDate dueDate,
                         String priority,
                         boolean isCompleted) {}

    public TaskResponse toTask (Task task) {
        return new TaskResponse(
                task.getId(),
                task.getTaskName(),
                task.getDescription(),
                task.getDueDate(),
                task.getPriority(),
                task.isCompleted()
        );
    }

    @PostMapping
    public ResponseEntity<TaskResponse> createTask (@RequestBody TaskRequest taskRequest) {
        var savedTask = taskService.save(toTaskEntity(taskRequest));
        return ResponseEntity
                .status(HttpStatus.CREATED)
                .body(toTask(savedTask));
    }

    @GetMapping("/{id}")
    public TaskResponse getTaskById(@PathVariable("id") Integer id){
        var task = taskService.findById(id);
        if (task == null) {
            return null;
        }
        return toTask(task);
    }
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteTaskById(@PathVariable("id") Integer id){
        taskService.deleteById(id);
        return ResponseEntity.noContent().build();
    }
    @PutMapping("/{id}/completed")
    public TaskResponse completedTask(@PathVariable("id") Integer id) {
        var task = taskService.completedTask(id);
        if (task == null) {
            return null;
        }
        return toTask(task);
    }
    @PutMapping("/{id}/uncompleted")
    public TaskResponse uncompletedTask(@PathVariable("id") Integer id) {
        var task = taskService.uncompletedTask(id);
        if (task == null) {
            return null;
        }
        return toTask(task);
    }

    @GetMapping
    public List<TaskResponse> listTasks(){
        return taskService.findAll().stream()
                .map(this::toTask)
                .toList();
    }

    private static Task toTaskEntity(TaskRequest taskRequest) {
        var task=new Task();
        task.setTaskName(taskRequest.taskName());
        task.setDescription(taskRequest.description());
        task.setDueDate(taskRequest.dueDate());
        task.setPriority(taskRequest.priority());
        task.setCompleted(false);
        return task;
    }

}
