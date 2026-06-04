package com.ocean.ocean;

import jakarta.persistence.*;

@Entity
@Table(name = "module_contents")
public class ModuleContent {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private Long moduleId;

    private String type;

    @Column(columnDefinition = "LONGTEXT")
    private String content;

    @Column(columnDefinition = "LONGTEXT")
    private String extra;

    private Integer orderNo;

    public ModuleContent() {
    }

    public Long getId() {
        return id;
    }

    public Long getModuleId() {
        return moduleId;
    }

    public String getType() {
        return type;
    }

    public String getContent() {
        return content;
    }

    public String getExtra() {
        return extra;
    }

    public Integer getOrderNo() {
        return orderNo;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public void setModuleId(Long moduleId) {
        this.moduleId = moduleId;
    }

    public void setType(String type) {
        this.type = type;
    }

    public void setContent(String content) {
        this.content = content;
    }

    public void setExtra(String extra) {
        this.extra = extra;
    }

    public void setOrderNo(Integer orderNo) {
        this.orderNo = orderNo;
    }
}