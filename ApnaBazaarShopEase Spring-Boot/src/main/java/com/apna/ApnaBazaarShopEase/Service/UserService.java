package com.apna.ApnaBazaarShopEase.Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.apna.ApnaBazaarShopEase.Entity.User;
import com.apna.ApnaBazaarShopEase.Repository.UserInterface1;

@Service
public class UserService {
	
	@Autowired
	UserInterface1 userRepository;

	
	public User registerUser(User user) {
        return userRepository.save(user);
    }
	
	public User findByUsername(String username) {
        User user = userRepository.findByEmail(username);
        if (user == null) {
            user = userRepository.findBymobileno(username);
        }
        return user;
    }
	
	public boolean authenticateUser(String username, String password) {
        User user = findByUsername(username);
        if (user != null && user.getPassword().equals(password)) {
            return true;
        }
        return false;
    }
}
