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

        String subject = "New Contact Message - Portfolio";

        String body =
                "Name: " + dto.getName() + "\n" +
                        "Email: " + dto.getEmail() + "\n\n" +
                        dto.getMessage();

        emailService.sendEmail(
                "laxmikantaloji77@gmail.com",
                subject,
                body
        );

        return dto;
    }
}