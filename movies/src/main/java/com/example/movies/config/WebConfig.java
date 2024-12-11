package com.example.movies.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class WebConfig implements WebMvcConfigurer {
    @Override
    public void addCorsMappings(CorsRegistry registry) {
        registry.addMapping("/movies/**")
            .allowedOrigins("http://localhost:5173")  // URL frontend Vue
            .allowedMethods("GET", "POST", "PUT", "DELETE");  // Metode yang diizinkan
    }
}
