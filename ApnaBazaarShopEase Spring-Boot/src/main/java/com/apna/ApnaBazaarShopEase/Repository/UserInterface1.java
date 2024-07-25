package com.apna.ApnaBazaarShopEase.Repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.apna.ApnaBazaarShopEase.Entity.User;

public interface UserInterface1 extends JpaRepository<User, Long> {

	User findByEmail(String email);

	User findBymobileno(String mobileno);

}
