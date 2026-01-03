package com.example.fashionappbackend.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
@RequestMapping("/api/auth")
@CrossOrigin(origins = "http://localhost:3000")
public class AuthController {

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody Map<String, String> body) {

        String username = body.get("username");
        String password = body.get("password");

        if ("admin".equals(username) && "123".equals(password)) {
            return ResponseEntity.ok(Map.of("message", "Login successful"));
        }

        return ResponseEntity.status(401)
                .body(Map.of("message", "Invalid credentials"));
    }
}
