package com.ocean.ocean;

import org.springframework.data.jpa.repository.JpaRepository;

public interface ModuleRepository
extends JpaRepository<LearningModule, Long> {
}