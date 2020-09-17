package com.gym.gym.models;


import org.springframework.web.multipart.MultipartFile;

import javax.persistence.*;
import javax.validation.constraints.NotBlank;
import java.io.Serializable;

@Entity
@Table(name = "gymequipment",
        uniqueConstraints = @UniqueConstraint(columnNames = "nameofequipment"))
public class GymEquipment  implements Serializable {
    private static final long serialVersionUID=425345L;

    public GymEquipment() {
    }

    public GymEquipment(String nameofequipment, String type, String description) {
    }

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    public String getEquipmentimage() {
        return equipmentimage;
    }

    public void setEquipmentimage(String equipmentimage) {
        this.equipmentimage = equipmentimage;
    }

    private String equipmentimage;


    @NotBlank
    private String nameofequipment;

    @Column(columnDefinition = "text")
    private String description;

    private double price;


    private double taxRate;

    @Column(name = "brand")
    private String brand;


    private double priceTaxExcl;
    private double priceTaxIncl;

    private int quantity;
    private String sku;


    @Transient
    private MultipartFile equipmentImage;


    //Getter and setters for Gym Equipment


    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getNameofequipment() {
        return nameofequipment;
    }

    public void setNameofequipment(String nameofequipment) {
        this.nameofequipment = nameofequipment;
    }


    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public double getPrice() {
        return price;
    }

    public void setPrice(double price) {
        this.price = price;
    }

    public double getTaxRate() {
        return taxRate;
    }

    public void setTaxRate(double taxRate) {
        this.taxRate = taxRate;
    }

    public String getBrand() {
        return brand;
    }

    public void setBrand(String brand) {
        this.brand = brand;
    }


    public double getPriceTaxExcl() {
        return priceTaxExcl;
    }

    public void setPriceTaxExcl(double priceTaxExcl) {
        this.priceTaxExcl = priceTaxExcl;
    }

    public double getPriceTaxIncl() {
        return priceTaxIncl;
    }

    public void setPriceTaxIncl(double priceTaxIncl) {
        this.priceTaxIncl = priceTaxIncl;
    }

    public int getQuantity() {
        return quantity;
    }

    public void setQuantity(int quantity) {
        this.quantity = quantity;
    }

    public String getSku() {
        return sku;
    }

    public void setSku(String sku) {
        this.sku = sku;
    }

    public MultipartFile getEquipmentImage() {
        return equipmentImage;
    }

    public void setEquipmentImage(MultipartFile equipmentImage) {
        this.equipmentImage = equipmentImage;
    }

}
