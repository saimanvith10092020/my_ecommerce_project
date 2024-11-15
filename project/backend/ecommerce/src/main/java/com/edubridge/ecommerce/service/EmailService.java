package com.edubridge.ecommerce.service;

import java.util.Date;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.core.io.ClassPathResource;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.stereotype.Service;
import jakarta.mail.internet.MimeMessage;

@Service
public class EmailService {
	@Autowired
	private JavaMailSender sender;
	
	@Value("${spring.mail.username}")
	private String fromEmail;
	
	public String sendMail(String subject, String msg, String[] toEmails) {
		try {
			MimeMessage message = sender.createMimeMessage();
			MimeMessageHelper helper =  new MimeMessageHelper(message,true);
			helper.setFrom(fromEmail);
			helper.setCc(toEmails);
			helper.setSubject(subject);
			helper.setSentDate(new Date());
			helper.setText(msg);
			sender.send(message);
		} catch (Exception e) {
			e.printStackTrace();
		}
		
		return "mail sent!";
	}
}
