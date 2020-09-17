package com.gym.gym.controllers;

import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/api/test")
public class TestController {
    @GetMapping("/home")
    public String allAccess() {
        return "Public Content.";
    }

    @GetMapping("members/user")
    @PreAuthorize("hasRole('USER') or hasRole('GUEST') or hasRole('ADMIN')")
    public String userAccess() {
        return "User";
    }

    @GetMapping("members/guest")
    @PreAuthorize("hasRole('GUEST')")
    public String moderatorAccess() {
        return "Guest";
    }

    @GetMapping("/administrator/")
    @PreAuthorize("hasRole('ADMIN')")
    public String adminAccess() {
        return "Admin";
    }
}
