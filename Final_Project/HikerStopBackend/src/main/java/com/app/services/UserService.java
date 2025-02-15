package com.app.services;

import java.util.Optional;


import com.app.pojos.User;

public interface UserService {
    public User saveUser(User user);

    public Optional<User> findByUsername(String username);

    
}
