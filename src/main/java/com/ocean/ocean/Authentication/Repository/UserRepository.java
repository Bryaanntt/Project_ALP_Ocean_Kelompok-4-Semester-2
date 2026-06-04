package com.ocean.ocean.Authentication.Repository;
import org.springframework.data.jpa.repository.JpaRepository;
import com.ocean.ocean.Authentication.Model.User;
import java.util.Optional;


public interface UserRepository extends JpaRepository<User, Long> {
    boolean isUsernameExists(String username);
    boolean isEmailExists(String email);
    Optional<User> findUsername(String username);
}
