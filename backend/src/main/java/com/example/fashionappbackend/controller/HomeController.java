package com.example.fashionappbackend.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import java.util.List;
import java.util.Arrays;

@RestController
public class HomeController {

    @GetMapping("/api/products")
    public List<String> home() {
        return Arrays.asList("Shirt", "Pants", "Jacket");
    }
}
