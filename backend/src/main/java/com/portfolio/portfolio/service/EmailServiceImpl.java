package com.portfolio.portfolio.service;

import okhttp3.*;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

@Service
public class EmailServiceImpl implements EmailService {

    @Value("${RESEND_API_KEY}")
    private String apiKey;

    @Override
    public void sendEmail(String name, String email, String message) throws Exception {

        OkHttpClient client = new OkHttpClient();

        String json = """
        {
          "from": "Portfolio <onboarding@resend.dev>",
          "to": ["laxmikantaloji77@gmail.com"],
          "subject": "New Portfolio Contact Message",
          "html": "<h3>New Contact Form Submission</h3><br><b>Name:</b> %s<br><b>Email:</b> %s<br><br><b>Message:</b><br>%s"
        }
        """.formatted(name, email, message);

        RequestBody requestBody =
                RequestBody.create(
                        json,
                        MediaType.parse("application/json")
                );

        Request request = new Request.Builder()
                .url("https://api.resend.com/emails")
                .addHeader("Authorization", "Bearer " + apiKey)
                .addHeader("Content-Type", "application/json")
                .post(requestBody)
                .build();

        Response response = client.newCall(request).execute();

        if (!response.isSuccessful()) {
            throw new RuntimeException(
                    "Resend Email Failed: " + response.body().string()
            );
        }

        System.out.println("EMAIL SENT SUCCESSFULLY");
    }
}