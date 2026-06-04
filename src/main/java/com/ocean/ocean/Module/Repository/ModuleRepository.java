package com.ocean.ocean.Module.Repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.ocean.ocean.Module.Model.LearningModule;

public interface ModuleRepository
extends JpaRepository<LearningModule, Long> {
}