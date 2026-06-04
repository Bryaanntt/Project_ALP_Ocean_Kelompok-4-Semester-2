package com.ocean.ocean;

import jakarta.persistence.*;

@Entity
@Table(name = "modules")
public class LearningModule {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String title;

    @Column(columnDefinition = "TEXT")
    private String description;

    @Column(name = "thumbnail")
    private String thumbnail;


    public Long getId() { return id; }
    public String getTitle() { return title; }
    public String getDescription() { return description; }
    public String getThumbnail() { return thumbnail; }
}