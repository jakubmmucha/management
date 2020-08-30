package com.gym.gym.repository;

import com.gym.gym.models.GymEquipment;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface GymEquipmentRepository extends JpaRepository<GymEquipment,Long> {
    Optional<GymEquipment> findByNameofequipment(String nameofEquipment);

}
