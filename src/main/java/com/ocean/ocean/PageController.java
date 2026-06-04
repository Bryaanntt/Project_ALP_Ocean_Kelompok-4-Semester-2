package com.ocean.ocean;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class PageController {

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
}