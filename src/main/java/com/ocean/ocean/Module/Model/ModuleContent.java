package com.ocean.ocean.Module.Model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "module_contents")
public class ModuleContent {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "module_id")
    private Long moduleId;

    @Column(name = "section_order")
    private Integer sectionOrder;

    @Column(name = "content_type")
    private String contentType;

    private String title;

    @Column(columnDefinition = "LONGTEXT")
    private String content;

    @Column(name = "image_url")
    private String imageUrl;

// Getter setter

public Long getId() {
    return id;
}

public void setId(Long id) {
    this.id = id;
}

public Long getModuleId() {
    return moduleId;
}

public void setModuleId(Long moduleId) {
    this.moduleId = moduleId;
}

public Integer getSectionOrder() {
    return sectionOrder;
}

public void setSectionOrder(Integer sectionOrder) {
    this.sectionOrder = sectionOrder;
}

public String getContentType() {
    return contentType;
}

public void setContentType(String contentType) {
    this.contentType = contentType;
}

public String getTitle() {
    return title;
}

public void setTitle(String title) {
    this.title = title;
}

public String getContent() {
    return content;
}

public void setContent(String content) {
    this.content = content;
}

public String getImageUrl() {
    return imageUrl;
}

public void setImageUrl(String imageUrl) {
    this.imageUrl = imageUrl;
}
}