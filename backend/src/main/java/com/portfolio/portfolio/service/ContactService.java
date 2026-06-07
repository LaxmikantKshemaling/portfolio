package com.portfolio.portfolio.service;

import com.portfolio.portfolio.dto.ContactMessageDTO;

public interface ContactService {

    ContactMessageDTO saveMessage(ContactMessageDTO dto);
}