package com.gym.gym.controllers;


import com.gym.gym.models.GymEquipment;
import com.gym.gym.payload.response.ResponseMessage;
import com.gym.gym.repository.GymEquipmentRepository;
import com.gym.gym.security.services.FileStorageService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.rest.webmvc.ResourceNotFoundException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import javax.validation.Valid;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@CrossOrigin(origins = {"http://localhost:4200","http://localhost:4201", "http://localhost:8000"})
@RestController
@RequestMapping("/api/")
public class GymEquipmentController {

    @Autowired
    private GymEquipmentRepository gymEquipmentRepository;
    @Autowired
    FileStorageService fileStorageService;

    @GetMapping("/equipments")
    public List<GymEquipment> getAllEquipments() {
        return gymEquipmentRepository.findAll();
    }

    @GetMapping("/equipments/{id}")
    public ResponseEntity<GymEquipment> getEquipmentById(@PathVariable(value = "id") Long equipmentId) throws ResourceNotFoundException {
       GymEquipment equipment = gymEquipmentRepository.findById(equipmentId)
                .orElseThrow(() -> new ResourceNotFoundException("Equipment not found for this id :: " + equipmentId));
        return ResponseEntity.ok().body(equipment);
    }

    @PostMapping("/upload")
    public ResponseEntity<ResponseMessage> uploadFile(@RequestParam("file") MultipartFile file) {
        String message = "";
        try {
            fileStorageService.store(file);

            message = "Uploaded the file successfully: " + file.getOriginalFilename();
            return ResponseEntity.status(HttpStatus.OK).body(new ResponseMessage(message));
        } catch (Exception e) {
            message = "Could not upload the file: " + file.getOriginalFilename() + "!";
            return ResponseEntity.status(HttpStatus.EXPECTATION_FAILED).body(new ResponseMessage(message));
        }
    }

    @PostMapping("/equipments")
    public GymEquipment createGymEquipment(@Valid @RequestBody GymEquipment equipment) {
        return gymEquipmentRepository.save(equipment);
    }

    @PutMapping("/equipments/{id}")
    public ResponseEntity<GymEquipment> updateGymEquipment(@PathVariable(value = "id") Long equipmentId, @Valid @RequestBody GymEquipment equipmentDetails) throws ResourceNotFoundException {
        GymEquipment gymEquipment = gymEquipmentRepository.findById(equipmentId)
                .orElseThrow(() -> new ResourceNotFoundException("Equipment not found for this id :: " + equipmentId));

        gymEquipment.setNameofequipment(equipmentDetails.getNameofequipment());
        gymEquipment.setDescription(equipmentDetails.getDescription());
        gymEquipment.setBrand(equipmentDetails.getBrand());
        gymEquipment.setPrice(equipmentDetails.getPrice());
        gymEquipment.setTaxRate(equipmentDetails.getTaxRate());
        final GymEquipment updatedGymEquipment = gymEquipmentRepository.save(gymEquipment);
        return ResponseEntity.ok(updatedGymEquipment);
    }

    @DeleteMapping("/equipments/{id}")
    public Map<String, Boolean> deleteGymEquipment(@PathVariable(value = "id") Long equipmentId) throws ResourceNotFoundException {
        GymEquipment gymEquipment = gymEquipmentRepository.findById(equipmentId)
                .orElseThrow(() -> new ResourceNotFoundException("Equipment not found for this id :: " + equipmentId));

        gymEquipmentRepository.delete(gymEquipment);
        Map<String, Boolean> response = new HashMap<>();
        response.put("GymEquipmentDeleted", Boolean.TRUE);
        return response;
    }

}
