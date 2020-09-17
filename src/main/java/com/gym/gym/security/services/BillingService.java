package com.gym.gym.security.services;

import com.gym.gym.models.BillingInformation;

import java.util.Optional;

public interface BillingService {
Optional<BillingInformation> findById(Long id);
void removeById (Long id);

}
