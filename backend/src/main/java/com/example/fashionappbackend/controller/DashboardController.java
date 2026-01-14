package com.example.fashionappbackend.controller;

import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.GetMapping;


@RestController
@RequestMapping("/api/dashboard")
public class DashboardController {

    @GetMapping("/test")
    public String test() {
        return "Dashboard is working!";
    }
}
