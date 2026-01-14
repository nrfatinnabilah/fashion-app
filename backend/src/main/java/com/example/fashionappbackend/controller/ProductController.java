package com.example.fashionappbackend.controller;

import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/products")
public class ProductController {

    @PreAuthorize("hasRole('ADMIN')")
    @PostMapping
    public String createProduct() {
        return "Product created";
    }

    @GetMapping
    public String getProducts() {
        return "All products";
    }
}
