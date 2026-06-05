package com.ocean.ocean;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;
import jakarta.servlet.http.HttpSession;
import java.util.List;
import java.util.Map;

@Controller
public class QuizPageController {

    @Autowired private QuizRepository quizRepository;
    @Autowired private ModuleRepository moduleRepository;

    // PRE QUIZ

    @GetMapping("/prequiz/{moduleId}")
    public String showPreQuiz(@PathVariable Long moduleId, Model model) {
        List<Quiz> quizzes = quizRepository.findByModuleId(moduleId);
        model.addAttribute("quizzes", quizzes);
        model.addAttribute("moduleId", moduleId);
        moduleRepository.findById(moduleId).ifPresent(m ->
            model.addAttribute("moduleTitle", m.getTitle())
        );
        return "Quiz";
    }

    @PostMapping("/prequiz/{moduleId}")
    public String submitPreQuiz(
            @PathVariable Long moduleId,
            @RequestParam Map<String, String> answers,
            HttpSession session) {

        List<Quiz> quizzes = quizRepository.findByModuleId(moduleId);
        int score = hitungScore(quizzes, answers);
        session.setAttribute("preAnswers", answers);
        session.setAttribute("preScore", score);

        return "redirect:/module/" + moduleId;
    }

    // POST QUIZ

    @GetMapping("/postquiz/{moduleId}")
    public String showPostQuiz(@PathVariable Long moduleId, Model model) {
        List<Quiz> quizzes = quizRepository.findByModuleId(moduleId);
        model.addAttribute("quizzes", quizzes);
        model.addAttribute("moduleId", moduleId);
        moduleRepository.findById(moduleId).ifPresent(m ->
            model.addAttribute("moduleTitle", m.getTitle())
        );
        return "PostQuiz";
    }

    @PostMapping("/postquiz/{moduleId}")
    public String submitPostQuiz(
            @PathVariable Long moduleId,
            @RequestParam Map<String, String> answers,
            HttpSession session) {

        List<Quiz> quizzes = quizRepository.findByModuleId(moduleId);
        int score = hitungScore(quizzes, answers);
        session.setAttribute("postAnswers", answers);
        session.setAttribute("postScore", score);

        return "redirect:/result/" + moduleId;
    }

    // RESULT

    @GetMapping("/result/{moduleId}")
    public String showResult(
            @PathVariable Long moduleId,
            HttpSession session,
            Model model) {

        Integer preScore  = (Integer) session.getAttribute("preScore");
        Integer postScore = (Integer) session.getAttribute("postScore");
        int totalSoal = quizRepository.findByModuleId(moduleId).size();

        model.addAttribute("preScore",  preScore  != null ? preScore  : 0);
        model.addAttribute("postScore", postScore != null ? postScore : 0);
        model.addAttribute("totalSoal", totalSoal);
        model.addAttribute("moduleId", moduleId);

        moduleRepository.findById(moduleId).ifPresent(m ->
            model.addAttribute("moduleTitle", m.getTitle())
        );

        return "Result";
    }

    // Score

    private int hitungScore(List<Quiz> quizzes, Map<String, String> answers) {
        int score = 0;
        for (Quiz quiz : quizzes) {
            String userAnswer = answers.get("q" + quiz.getId());
            if (quiz.getAnswer() != null &&
                quiz.getAnswer().equalsIgnoreCase(userAnswer)) {
                score++;
            }
        }
        return score;
    }
}