package com.gym.gym.controllers;


import com.gym.gym.models.BillingInformation;
import com.gym.gym.models.User;
import com.gym.gym.repository.BillingInformationRepository;
import com.gym.gym.repository.RoleRepository;
import com.gym.gym.repository.UserRepository;
import com.gym.gym.security.jwt.JwtUtils;
import com.gym.gym.security.services.UserDetailsServiceImpl;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.rest.webmvc.ResourceNotFoundException;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@CrossOrigin(origins = {"*"},
        maxAge = 3600)
@RestController
@RequestMapping("/api")
public class UserController {
    private static final Logger LOGGER = LoggerFactory.getLogger(UserController.class);

    @Autowired
    UserRepository userRepository;
    @Autowired
    RoleRepository roleRepository;
    @Autowired
    AuthenticationManager authenticationManager;
    @Autowired
    UserDetailsServiceImpl userDetailsSer;
    @Autowired
    JwtUtils jwtUtils;
    @Autowired
    BillingInformationRepository billingInformationRepository;


    @GetMapping("/users")
    public List<User> getAllUsers() {
        return userRepository.findAll();
    }


    @GetMapping("/users/{id}")
    public ResponseEntity<User> getUserById(@PathVariable(value = "id") Long userId) throws ResourceNotFoundException {
        User user = userRepository.findById(userId)
                .orElseThrow(() -> new ResourceNotFoundException("User not found for this id :: " + userId));
        return ResponseEntity.ok().body(user);
    }

    @PostMapping("/users")
    public User createUser(@Valid @RequestBody User user) {
        return userRepository.save(user);
    }


    @PutMapping("/users/{id}")
    public ResponseEntity<User> updateUser(@PathVariable(value = "id") Long userId, @Valid @RequestBody User userDetails) throws ResourceNotFoundException {
        User user = userRepository.findById(userId)
                .orElseThrow(() -> new ResourceNotFoundException("User not found for this id :: " + userId));

        user.setEmail(userDetails.getEmail());
        user.setLastname(userDetails.getLastname());
        user.setFirstname(userDetails.getFirstname());
        user.setPhonenumber(userDetails.getPhonenumber());
        user.setGender(userDetails.getGender());
        user.setUserBillingList(userDetails.getUserBillingList());
        final User updatedUser = userRepository.save(user);
        return ResponseEntity.ok(updatedUser);
    }


    @PostMapping("/user/add")
    public ResponseEntity<?> updateUserWithBilling(@RequestBody BillingInformation billingInformation) throws ResourceNotFoundException {
        UserDetails userDetails = (UserDetails) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        User user = userRepository.findByUsername(userDetails.getUsername());
        billingInformation.setUser(user);
        billingInformation.setBillingDefault(true);
        user.getUserBillingList().add(billingInformation);
       final BillingInformation updatedBilling= billingInformationRepository.save(billingInformation);
        return ResponseEntity.ok(updatedBilling);
    }

    @GetMapping("user/authenticated")
    public UserDetails logged() {
        return userDetailsSer.currentlyLogged();
    }

    @PostMapping("user/updateInfo")
    public void setAsDefault(Long billingInfoId, User user) {
        List<BillingInformation> billingInformationList = (List<BillingInformation>) billingInformationRepository.findAll();
        for (BillingInformation billingInformation : billingInformationList) {
            if (billingInformation.getId() == billingInfoId) {
                billingInformation.setBillingDefault(true);
                billingInformationRepository.save(billingInformation);
            } else {
                billingInformation.setBillingDefault(false);
                billingInformationRepository.save(billingInformation);
            }
        }
    }

    @DeleteMapping("/users/{id}")
    public Map<String, Boolean> deleteUser(@PathVariable(value = "id") Long userId) throws ResourceNotFoundException {
        User user = userRepository.findById(userId)
                .orElseThrow(() -> new ResourceNotFoundException("User not found for this id :: " + userId));

        userRepository.delete(user);
        Map<String, Boolean> response = new HashMap<>();
        response.put("UserDeleted", Boolean.TRUE);
        return response;
    }
}
