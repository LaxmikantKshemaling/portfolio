package com.portfolio.portfolio.controller;

import com.portfolio.portfolio.dto.ContactMessageDTO;
import com.portfolio.portfolio.service.ContactService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
@RequestMapping("/api/contact")
@RequiredArgsConstructor
public class ContactController {

    private final ContactService contactService;

    @PostMapping
    public ResponseEntity<?> sendMessage(
            @RequestBody @Valid ContactMessageDTO dto) {

        ContactMessageDTO response =
                contactService.saveMessage(dto);

        return ResponseEntity.ok(
                Map.of(
                        "success", true,
                        "message", "Message Sent Successfully!",
                        "data", response
                )
        );
    }
}