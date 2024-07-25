package com.apna.ApnaBazaarShopEase.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.apna.ApnaBazaarShopEase.Entity.User;
import com.apna.ApnaBazaarShopEase.Service.UserService;

@CrossOrigin
@RestController
@RequestMapping("user")
public class UserController {

	@Autowired
	UserService userService;

	@PostMapping("register")
	public ResponseEntity<String> registerUser(@RequestBody User user) {
		userService.registerUser(user);
		return ResponseEntity.ok("User registered successfully!");
	}

//	@PostMapping("authenticate")
//	public ResponseEntity<String> authenticateUser(@RequestParam String username, @RequestParam String password) {
//		if (userService.authenticateUser(username, password)) {
//			return ResponseEntity.ok("User authenticated successfully!");
//		} else {
//			return ResponseEntity.status(401).body("Invalid username or password");
//		}
//	}
	
	@PostMapping("authenticate")
	public ResponseEntity<String> authenticateUser(@RequestBody User loginRequest) {
	    if (userService.authenticateUser(loginRequest.getEmail(), loginRequest.getPassword())) {
	        return ResponseEntity.ok("User authenticated successfully!");
	    } else {
	        return ResponseEntity.status(401).body("Invalid username or password");
	    }
	}
}
