package com.apna.ApnaBazaarShopEase.Entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class User {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	long id;

	String name;
	String mobileno;
	String email;
	String password;
	String address;

	public User() {

	}

	public User(String name, String mobileno, String email, String password, String address) {
		super();
		this.name = name;
		this.mobileno = mobileno;
		this.email = email;
		this.password = password;
		this.address = address;
	}

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getmobileno() {
		return mobileno;
	}

	public void setmobileno(String mobileno) {
		this.mobileno = mobileno;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public String getAddress() {
		return address;
	}

	public void setAddress(String address) {
		this.address = address;
	}

	
	@Override
	public String toString() {
		return "User [id=" + id + ", name=" + name + ", mobileno=" + mobileno + ", email=" + email + ", password="
				+ password + ", address=" + address + "]";
	}
}