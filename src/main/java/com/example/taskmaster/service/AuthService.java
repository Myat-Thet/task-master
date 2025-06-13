package com.example.taskmaster.service;

import com.example.taskmaster.dao.RoleDao;
import com.example.taskmaster.dao.UserDao;
import com.example.taskmaster.entity.Role;
import com.example.taskmaster.entity.User;
import lombok.RequiredArgsConstructor;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
@RequiredArgsConstructor
public class AuthService {

    private final UserDao userDao;
    private final PasswordEncoder passwordEncoder;
    private final RoleDao roleDao;
    private final AuthenticationManager authenticationManager;

    public String login(String username, String password) {
        var authUser = new UsernamePasswordAuthenticationToken(username, password);
        Authentication authentication = authenticationManager.authenticate(authUser);
        SecurityContextHolder.getContext().setAuthentication(authentication);
        return "User logged in successfully";
    }

    public String register(String username, String password) {
        var user = new User();
        user.setUsername(username);
        user.setPassword(passwordEncoder.encode(password));
        Optional<Role> userRoleOptional = roleDao.findByRoleName("ROLE_USER");

        if (userRoleOptional.isPresent()) {
            Role userRole = userRoleOptional.get();
            user.getRoles().add(userRole);
            userDao.save(user);
            return "User registered successfully";
        }
        else {
            var role = new Role();
            role.setRoleName("ROLE_USER");
            role = roleDao.save(role);
            user.getRoles().add(role);
            userDao.save(user);
            return "User registered successfully";

        }
    }


}
