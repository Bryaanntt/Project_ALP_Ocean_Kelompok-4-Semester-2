package com.ocean.ocean.Authentication.Service;
import com.ocean.ocean.Authentication.Model.User;

import org.springframework.stereotype.Service;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;

import com.ocean.ocean.Authentication.Repository.UserRepository;
import org.springframework.security.crypto.password.PasswordEncoder;

@Service
public class UserService implements UserDetailsService {
    private UserRepository userRepo;
    private PasswordEncoder passwordEncoder;

    public UserService(UserRepository userRepo, PasswordEncoder passwordEncoder) {
        this.userRepo = userRepo;
        this.passwordEncoder = passwordEncoder;
    }

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        User user  = userRepo.findUsername(username).orElseThrow(() -> new UsernameNotFoundException("Username Not Found : " + username));
        return org.springframework.security.core.userdetails.User
                .withUsername(user.getUsername())
                .password(user.getPassword())
                .roles(user.getRole().name())
                .build();
    }

    public User register(String username, String email, String password) {
        if (userRepo.isUsernameExists(username)) {
            throw new RuntimeException("Username sudah digunakan.");
        }
        if (userRepo.isEmailExists(email)) {
            throw new RuntimeException("Email sudah digunakan.");
        }

        User user = new User();
        user.setUsername(username);
        user.setEmail(email);
        user.setPassword(passwordEncoder.encode(password));
        user.setRole(User.Role.USER);

        return userRepo.save(user);
    }
}
