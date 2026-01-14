package com.example.fashionappbackend.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import java.util.List;
import java.util.Arrays;

@RestController
public class HomeController {

    @GetMapping("/api/dashboard")
    public String home() {
        return "Welcome!";
    }
}
