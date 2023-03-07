package com.mihrock.todoapi.service;

import com.mihrock.todoapi.entity.ToDoItemEntity;
import com.mihrock.todoapi.model.ToDoItem;
import com.mihrock.todoapi.repository.ToDoRepository;
import org.springframework.beans.BeanUtils;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class ToDoServiceImpl  implements ToDoService {

    private final ToDoRepository toDoRepository;

    public ToDoServiceImpl(ToDoRepository toDoRepository) {
        this.toDoRepository = toDoRepository;
    }

    @Override
    public List<ToDoItem> fetchAllToDoItems() {
        List<ToDoItemEntity> toDoItemEntities = toDoRepository.findAll();

        List<ToDoItem> toDoItems = toDoItemEntities
                .stream()
                .map(item -> new ToDoItem(
                        item.getId(),
                        item.getItem()))
                .collect(Collectors.toList());

        return toDoItems;
    }

    @Override
    public ToDoItem createToDoItem(ToDoItem item) {
        ToDoItemEntity entity = new ToDoItemEntity();

        BeanUtils.copyProperties(item, entity);
        toDoRepository.save(entity);

        return item;
    }
}
