package com.mihrock.todoapi.controller;

import com.mihrock.todoapi.model.ToDoItem;
import com.mihrock.todoapi.service.ToDoService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

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

    @DeleteMapping("/todoItems/{id}")
    public ResponseEntity<Map<String,Boolean>> deleteItem(@PathVariable Integer id) {
        boolean deleted = false;
        deleted = toDoService.deleteItem(id);
        Map<String,Boolean> response = new HashMap<>();
        response.put("deleted", deleted);
        return ResponseEntity.ok(response);
    }

    @PutMapping("/todoItems/{id}")
    public ResponseEntity<ToDoItem> updateEmployee(@PathVariable Integer id,
                                                   @RequestBody ToDoItem item) {
        item = toDoService.updateItem(id, item);
        return ResponseEntity.ok(item);
    }

}
