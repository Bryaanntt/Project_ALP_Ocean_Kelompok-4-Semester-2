package com.ocean.ocean.Module.Repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.ocean.ocean.Module.Model.Quiz;

import java.util.List;

public interface QuizRepository extends JpaRepository<Quiz, Long> {

    List<Quiz> findByModuleId(Long moduleId);

}