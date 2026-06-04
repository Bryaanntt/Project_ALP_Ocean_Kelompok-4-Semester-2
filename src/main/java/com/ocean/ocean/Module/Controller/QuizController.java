package com.ocean.ocean.Module.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.ocean.ocean.Module.Model.Quiz;
import com.ocean.ocean.Module.Repository.QuizRepository;

import java.util.List;

@RestController
@RequestMapping("/api/quizzes")
@CrossOrigin
public class QuizController {

    @Autowired
    private QuizRepository quizRepository;

    @GetMapping("/module/{moduleId}")
    public List<Quiz> getQuizByModule(@PathVariable Long moduleId) {
        return quizRepository.findByModuleId(moduleId);
    }
}