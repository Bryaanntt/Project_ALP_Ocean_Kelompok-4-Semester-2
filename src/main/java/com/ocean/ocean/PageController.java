package com.ocean.ocean;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.ui.Model;
import java.util.List;

@Controller
public class PageController {

    private final ModuleRepository moduleRepository;
    private final ModuleContentRepository moduleContentRepository;
    public PageController(ModuleRepository moduleRepository,
    ModuleContentRepository moduleContentRepository) {
    this.moduleRepository = moduleRepository;
    this.moduleContentRepository = moduleContentRepository;
    }

    @GetMapping("/")
    public String home() {
        return "Homepage";
    }

    @GetMapping("/modules")
    public String modules() {
        return "Modules";
    }

    @GetMapping("/tips")
    public String tips() {
        return "Tips";
    }

    @GetMapping("/quiz")
    public String quiz() {
        return "Quiz";
    }

    @GetMapping("/module/{id}")
    public String moduleDetail(@PathVariable Long id, Model model) {

        LearningModule module = moduleRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Module tidak ditemukan"));

        List<ModuleContent> contents = moduleContentRepository.findByModuleIdOrderBySectionOrder(id);

        model.addAttribute("module", module);
        model.addAttribute("contents", contents);

        return "ModulesDetail";
    }
}