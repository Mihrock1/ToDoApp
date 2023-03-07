package com.mihrock.todoapi.repository;

import com.mihrock.todoapi.entity.ToDoItemEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ToDoRepository extends JpaRepository<ToDoItemEntity, Integer> {
}
