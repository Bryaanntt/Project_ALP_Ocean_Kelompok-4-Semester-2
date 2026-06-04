package com.ocean.ocean;

import jakarta.persistence.*;

@Entity
@Table(name = "modules")
public class LearningModule {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String title;

    @Column(name = "image_url")
    private String imageUrl;

    @Column(columnDefinition = "LONGTEXT")
    private String content;

    public Long getId() { return id; }
    public String getTitle() { return title; }
    public String getImageUrl() { return imageUrl; }
    public String getContent() { return content; }
}