package com.portfolio.portfolio.service;

public interface EmailService {
    void sendEmail(String to, String subject, String body);
}