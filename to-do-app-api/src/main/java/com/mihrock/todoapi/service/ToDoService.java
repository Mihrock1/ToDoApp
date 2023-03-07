package com.mihrock.todoapi.service;

import com.mihrock.todoapi.model.ToDoItem;

import java.util.List;

public interface ToDoService {

    List<ToDoItem> fetchAllToDoItems();

    ToDoItem createToDoItem(ToDoItem item);
}
