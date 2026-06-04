package com.ocean.ocean.Authentication.Controller;

import com.ocean.ocean.Authentication.Model.User;
import com.ocean.ocean.Authentication.Service.UserService;
import jakarta.servlet.http.HttpServletRequest;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.*;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
@RequestMapping("/api/auth")
public class AuthController {

    private final UserService userService;
    private final AuthenticationManager authenticationManager;

    public AuthController(UserService userService,
                          AuthenticationManager authenticationManager) {
        this.userService = userService;
        this.authenticationManager = authenticationManager;
    }

    // POST /api/auth/register
    @PostMapping("/register")
    public ResponseEntity<?> register(@RequestBody Map<String, String> body,
                                      HttpServletRequest request) {
        try {
            String username = body.get("username");
            String email    = body.get("email");
            String password = body.get("password");

            User user = userService.register(username, email, password);

            // Auto login setelah register
            Authentication auth = authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(username, password)
            );
            SecurityContextHolder.getContext().setAuthentication(auth);
            request.getSession(true);

            return ResponseEntity.ok(Map.of(
                "username", user.getUsername(),
                "email",    user.getEmail(),
                "role",     user.getRole().name()
            ));

        } catch (RuntimeException e) {
            return ResponseEntity.badRequest().body(e.getMessage());
        }
    }

    // POST /api/auth/login
    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody Map<String, String> body,
                                   HttpServletRequest request) {
        try {
            String username = body.get("username");
            String password = body.get("password");

            Authentication auth = authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(username, password)
            );
            SecurityContextHolder.getContext().setAuthentication(auth);
            request.getSession(true); 

            return ResponseEntity.ok(Map.of(
                "username", username,
                "role",     auth.getAuthorities().iterator().next().getAuthority()
            ));

        } catch (BadCredentialsException e) {
            return ResponseEntity.status(401).body("Username atau password salah.");
        }
    }

    @GetMapping("/me")
    public ResponseEntity<?> me() {
        Authentication auth = SecurityContextHolder.getContext().getAuthentication();

        if (auth == null || !auth.isAuthenticated()
                || auth.getPrincipal().equals("anonymousUser")) {
            return ResponseEntity.status(401).body("Belum login.");
        }

        return ResponseEntity.ok(Map.of("username", auth.getName()));
    }
}