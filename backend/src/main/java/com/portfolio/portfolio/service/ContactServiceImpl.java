package com.portfolio.portfolio.service;

import com.portfolio.portfolio.dto.ContactMessageDTO;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class ContactServiceImpl implements ContactService {

    private final EmailService emailService;

    @Override
    public ContactMessageDTO saveMessage(ContactMessageDTO dto) {

        try {

            emailService.sendEmail(
                    dto.getName(),
                    dto.getEmail(),
                    dto.getMessage()
            );

            return dto;

        } catch (Exception e) {

            e.printStackTrace();

            throw new RuntimeException(
                    "Failed to send email: " + e.getMessage()
            );
        }
    }
}