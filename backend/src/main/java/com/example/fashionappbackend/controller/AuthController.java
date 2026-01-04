package com.example.fashionappbackend.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

import com.example.fashionappbackend.security.JwtUtil;

@RestController
@RequestMapping("/api/auth")
@CrossOrigin(origins = "http://localhost:3000")
public class AuthController {

    @Autowired
    private JwtUtil jwtUtil;
    
    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody Map<String, String> body) {
        System.out.println("Login request received: " + body);

        String username = body.get("username");
        String password = body.get("password");

        if ("admin".equals(username) && "123".equals(password)) {
            
            String token = jwtUtil.generateToken(username);

            return ResponseEntity.ok(Map.of("message", "Login successful", "token", token));
        }

        return ResponseEntity.status(401)
                .body(Map.of("message", "Invalid credentials"));
    }
}
