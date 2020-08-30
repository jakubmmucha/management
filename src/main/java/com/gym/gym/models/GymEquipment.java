package com.gym.gym.models;


import javax.persistence.*;
import javax.validation.constraints.NotBlank;

@Entity
@Table(name = "gymequipment",
        uniqueConstraints = @UniqueConstraint(columnNames = "nameofequipment"))
public class GymEquipment {


    @OneToOne
    @JoinColumn(name="imageid")
    private FileDB fileDB;

    public FileDB getFileDB() {
        return fileDB;
    }

    public GymEquipment(){
    }
    public GymEquipment(String nameofequipment, String type, String description){
    }




    public void setFileDB(FileDB fileDB) {
        this.fileDB = fileDB;
    }
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;




    @NotBlank
    private String nameofequipment;

    @NotBlank
    private String description;

    private double price;


    private double taxRate;

    @Column(name="brand")
     private String brand;



    private double priceTaxExcl;
    private double priceTaxIncl;

    private int quantity;
    private String sku;


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
}
