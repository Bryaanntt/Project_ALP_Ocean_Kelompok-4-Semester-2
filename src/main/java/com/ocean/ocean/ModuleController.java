package com.ocean.ocean;

import org.springframework.web.bind.annotation.*;
import java.util.*;

@RestController
@RequestMapping("/api/modules")
@CrossOrigin("*")
public class ModuleController {

    private final ModuleRepository moduleRepo;

    public ModuleController(ModuleRepository moduleRepo) {
        this.moduleRepo = moduleRepo;
    }

    @GetMapping
    public List<LearningModule> getModules() {
        return moduleRepo.findAll();
    }

    @GetMapping("/{id}")
    public LearningModule getModule(@PathVariable Long id) {

        return moduleRepo.findById(id)
                .orElseThrow(() -> new RuntimeException("Module tidak ditemukan"));
    }
}