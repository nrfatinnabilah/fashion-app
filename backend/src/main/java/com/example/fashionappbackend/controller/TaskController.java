package com.example.fashionappbackend.controller;

import com.example.fashionappbackend.model.Task;
import com.example.fashionappbackend.model.User;
import com.example.fashionappbackend.repository.TaskRepository;
import com.example.fashionappbackend.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/api/tasks")
@RequiredArgsConstructor
@CrossOrigin
public class TaskController {

    private final TaskRepository taskRepository;
    private final UserRepository userRepository;

    // For simplicity, demo user ID = 1
    private User getCurrentUser() {
        return userRepository.findById(1L).orElseThrow();
    }

    @GetMapping
    public List<Task> getTasks() {
        return taskRepository.findByUser(getCurrentUser());
    }

    @PostMapping
    public Task addTask(@RequestBody Task task) {
        task.setUser(getCurrentUser());
        return taskRepository.save(task);
    }

    @PutMapping("/{id}")
    public Task updateTask(@PathVariable Long id, @RequestBody Task task) {
        Task existing = taskRepository.findById(id).orElseThrow();
        existing.setTitle(task.getTitle());
        existing.setCompleted(task.isCompleted());
        return taskRepository.save(existing);
    }

    @DeleteMapping("/{id}")
    public String deleteTask(@PathVariable Long id) {
        taskRepository.deleteById(id);
        return "Deleted";
    }
}
