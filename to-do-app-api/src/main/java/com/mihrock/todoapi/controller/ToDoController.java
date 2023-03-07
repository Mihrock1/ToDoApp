package com.mihrock.todoapi.controller;

import com.mihrock.todoapi.model.ToDoItem;
import com.mihrock.todoapi.service.ToDoService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api")
public class ToDoController {

    private final ToDoService toDoService;

    public ToDoController(ToDoService toDoService) {
        this.toDoService = toDoService;
    }

    @GetMapping("/todoItems")
    public List<ToDoItem> fetchAllToDoItems() {
        return toDoService.fetchAllToDoItems();
    }

    @PostMapping("/todoItems")
    public ToDoItem createToDoItem(@RequestBody ToDoItem item) {
        return toDoService.createToDoItem(item);
    }
}
