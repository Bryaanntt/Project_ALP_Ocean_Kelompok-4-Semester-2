package com.ocean.ocean;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

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