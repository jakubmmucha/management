package com.gym.gym.models;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import javax.persistence.*;
import java.io.Serializable;

@Table(name="billing")
@Entity
public class BillingInformation implements Serializable  {
    private static final long serialVersionUID = 189013457L;

    public BillingInformation(){

    }

    public BillingInformation(String firstname, String lastname, String street1, String street2,
                              String city, String state, String country, String postcode, User user, Boolean billingDefault) {
        this.firstname = firstname;
        this.lastname = lastname;
        this.street1 = street1;
        this.street2 = street2;
        this.country = country;
        this.postcode = postcode;
        this.city=city;
        this.state=state;
        this.user=user;
        this.billingDefault=billingDefault;
    }

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String firstname;
    private String lastname;
    private String street1;
    private String street2;

    private String city;
    private String state;
    private String postcode;
    private String country;


    private Boolean billingDefault;
    public Boolean getBillingDefault() {
        return billingDefault;
    }
    public void setBillingDefault(Boolean billingDefault) {
        this.billingDefault = billingDefault;
    }

    @JsonIgnore
    @ManyToOne
    @JsonBackReference
    @JoinColumn(name="user_id")
    private User user;
    public User getUser() {
        return user;
    }
    public void setUser(User user) {
        this.user = user;
    }



    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
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

    public String getStreet1() {
        return street1;
    }

    public void setStreet1(String street1) {
        this.street1 = street1;
    }

    public String getCity() {
        return city;
    }

    public void setCity(String city) {
        this.city = city;
    }

    public String getState() {
        return state;
    }

    public void setState(String state) {
        this.state = state;
    }

    public String getCountry() {
        return country;
    }

    public void setCountry(String country) {
        this.country = country;
    }

    public String getPostcode() {
        return postcode;
    }

    public void setPostcode(String postcode) {
        this.postcode = postcode;
    }

    public String getStreet2() {
        return street2;
    }

    public void setStreet2(String street2) {
        this.street2 = street2;
    }

}
