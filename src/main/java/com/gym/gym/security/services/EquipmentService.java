package com.gym.gym.security.services;


import com.gym.gym.repository.GymEquipmentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class EquipmentService {
    @Autowired
   private FileStorageService fileStorageService;
    @Autowired
    private GymEquipmentRepository gymEquipmentRepository;
}
