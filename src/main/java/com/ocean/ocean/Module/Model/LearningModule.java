package com.ocean.ocean.Module.Model;

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
    public void setId(Long id) { this.id = id; }
    public void setTitle(String title) { this.title = title; }
    public void setDescription(String description) { this.description = description; }
    public void setThumbnail(String thumbnail) { this.thumbnail = thumbnail; }
}