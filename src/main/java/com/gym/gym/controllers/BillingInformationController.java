package com.gym.gym.controllers;

import com.gym.gym.repository.BillingInformationRepository;
import com.gym.gym.repository.UserRepository;
import com.gym.gym.security.services.UserDetailsServiceImpl;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins = {"**"},
        maxAge = 3600)
@RestController
@RequestMapping("/api")
public class BillingInformationController {
    private static final Logger LOGGER= LoggerFactory.getLogger(BillingInformationController.class);

    @Autowired
    private BillingInformationRepository billingInformationRepository;

    @Autowired
    private UserRepository userRepository;
    @Autowired
    private  UserDetailsServiceImpl userDetailsService;


    }

