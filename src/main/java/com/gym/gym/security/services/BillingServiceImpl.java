package com.gym.gym.security.services;

import com.gym.gym.models.BillingInformation;
import com.gym.gym.repository.BillingInformationRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class BillingServiceImpl implements BillingService {


    @Autowired
    private BillingInformationRepository billingInformationRepository;
    @Override
    public Optional<BillingInformation> findById(Long id) {
        return billingInformationRepository.findById(id);
    }
    @Override
    public void removeById(Long id) {
    billingInformationRepository.deleteById(id);
    }
}
