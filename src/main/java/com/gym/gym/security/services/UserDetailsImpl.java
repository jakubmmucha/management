package com.gym.gym.security.services;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.gym.gym.models.BillingInformation;
import com.gym.gym.models.User;
import com.gym.gym.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import java.util.Collection;
import java.util.List;
import java.util.Objects;
import java.util.stream.Collectors;

public class UserDetailsImpl implements UserDetails {
    private static final long serialVersionUID = 1L;

    @Autowired
    UserRepository userRepository;

    private Long id;

    private String username;

    private String firstname;

    private String lastname;

    private String email;

    @JsonIgnore
    private String password;


    private Collection<? extends GrantedAuthority> authorities;

    private List<BillingInformation> billingInformationList;

    public UserDetailsImpl(Long id, String username, String firstname, String lastname, String email, String password,
                           Collection<? extends GrantedAuthority> authorities, List<BillingInformation> billingInformationList) {
        this.id = id;
        this.username = username;
        this.firstname = firstname;
        this.lastname = lastname;
        this.email = email;
        this.password = password;
        this.billingInformationList=billingInformationList;
        this.authorities = authorities;
    }



    public static UserDetailsImpl build(User user) {
        List<GrantedAuthority> authorities = user.getRoles().stream()
                .map(role -> new SimpleGrantedAuthority(role.getName().name()))
                .collect(Collectors.toList());
        List<BillingInformation> billingInformationList = user.getUserBillingList();

        return new UserDetailsImpl(
                user.getId(),
                user.getUsername(),
                user.getFirstname(),
                user.getLastname(),
                user.getEmail(),
                user.getPassword(),
                authorities,
                billingInformationList);
    }

    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        return authorities;
    }

    public User findByUsername(String username) {
        return userRepository.findByUsername(username);
    }


    public Long getId() {
        return id;
    }

    public String getEmail() {
        return email;
    }

    public String getFirstname() {
        return firstname;
    }

    public void setFirstname(String firstname) {
        this.firstname = firstname;
    }

    public String getLastname() {
        return lastname;
    }

    public void setLastname(String lastname) {
        this.lastname = lastname;
    }

    @Override
    public String getPassword() {
        return password;
    }

    @Override
    public String getUsername() {
        return username;
    }

    @Override
    public boolean isAccountNonExpired() {
        return true;
    }

    @Override
    public boolean isAccountNonLocked() {
        return true;
    }

    @Override
    public boolean isCredentialsNonExpired() {
        return true;
    }

    @Override
    public boolean isEnabled() {
        return true;
    }


    @Override
    public boolean equals(Object o) {
        if (this == o)
            return true;
        if (o == null || getClass() != o.getClass())
            return false;
        UserDetailsImpl user = (UserDetailsImpl) o;
        return Objects.equals(id, user.id);
    }

}
