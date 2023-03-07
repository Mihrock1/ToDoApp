package com.mihrock.todoapi.entity;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Data
@Table(name = "todoItems")
public class ToDoItemEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private String item;
}
