package com.ocean.ocean;

import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ModuleContentRepository
extends JpaRepository<ModuleContent, Long> {

    List<ModuleContent>
    findByModuleIdOrderByOrderNo(Long moduleId);

}