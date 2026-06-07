package com.portfolio.portfolio.service;

public interface EmailService {

    void sendEmail(String name, String email, String message) throws Exception;

}