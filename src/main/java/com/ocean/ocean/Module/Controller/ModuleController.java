package com.ocean.ocean.Module.Controller;

import org.springframework.web.bind.annotation.*;

import com.ocean.ocean.Module.Model.LearningModule;
import com.ocean.ocean.Module.Repository.ModuleRepository;

import java.util.*;

@RestController
@RequestMapping("/api/modules")
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