package com.ocean.ocean.Authentication.Config;

import com.ocean.ocean.Authentication.Service.UserService;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.*;
import org.springframework.security.config.annotation.authentication.configuration.AuthenticationConfiguration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;

@Configuration
public class SecurityConfig {

    private final UserService userService;

    public SecurityConfig(UserService userService) {
        this.userService = userService;
    }

    @Bean
    public PasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }

    @Bean
    public AuthenticationManager authenticationManager(
            AuthenticationConfiguration config) throws Exception {
        return config.getAuthenticationManager();
    }

    @Bean
    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
        http
            .csrf(csrf -> csrf
                // Izinkan POST dari form HTML biasa
                .ignoringRequestMatchers("/api/auth/**")
            )
            .authorizeHttpRequests(auth -> auth
                // Halaman publik — semua boleh akses
                .requestMatchers(
                    "/", "/modules", "/tips", "/quiz/**", "/module/**",
                    "/api/modules/**", "/api/quizzes/**",
                    "/api/auth/**",
                    "/css/**", "/js/**", "/Foto/**",
                    "/*.css", "/*.js"
                ).permitAll()
                // Endpoint komentar — harus login
                .requestMatchers("/api/comments/**").authenticated()
                // Selain itu — harus login
                .anyRequest().authenticated()
            )
            .formLogin(form -> form.disable())
            .logout(logout -> logout
                .logoutUrl("/api/auth/logout")
                .logoutSuccessHandler((req, res, auth) -> {
                    res.setStatus(200);
                })
            )
            .sessionManagement(session -> session
                .maximumSessions(1)
            );

        return http.build();
    }
}
