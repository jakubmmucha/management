package com.gym.gym.security.services;

import com.gym.gym.models.BillingInformation;
import com.gym.gym.models.User;
import com.gym.gym.repository.UserRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.security.Principal;


@Service
public class UserDetailsServiceImpl implements UserDetailsService {
    private static final Logger log = LoggerFactory.getLogger(UserDetailsService.class);

    private UserDetailsImpl userDetails;
    @Autowired
    private UserRepository userRepository;

    @Override
    @Transactional
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        User user = userRepository.findByUsername(username);
        return UserDetailsImpl.build(user);
    }

    public User save(User unknown) {
        return userRepository.save(unknown);
    }

    public void updateBillingInformation(BillingInformation billingInformation, User user) {
        billingInformation.setUser(user);
        billingInformation.setBillingDefault(true);
        user.getUserBillingList().add(billingInformation);
        save(user);
    }

    public UserDetails currentlyLogged() {
        Principal principal = SecurityContextHolder.getContext().getAuthentication();
        return loadUserByUsername(principal.getName());
    }


}
