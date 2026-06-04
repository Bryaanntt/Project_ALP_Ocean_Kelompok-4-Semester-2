package com.ocean.ocean;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

@Controller
public class QuizPageController {

    @Autowired
    private QuizRepository quizRepository;

    @GetMapping("/quiz/{moduleId}")
    public String showQuiz(
            @PathVariable Long moduleId,
            Model model) {

        model.addAttribute(
                "quizzes",
                quizRepository.findByModuleId(moduleId)
        );

        return "Quiz";
    }
}