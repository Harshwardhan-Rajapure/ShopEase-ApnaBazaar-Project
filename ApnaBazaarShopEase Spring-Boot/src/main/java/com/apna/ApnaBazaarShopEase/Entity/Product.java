package com.apna.ApnaBazaarShopEase.Entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class Product {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	long id;

	String title;
	String description;
	Double price;
	String category;
	String image;

	public Product() {

	}

	public Product(String title, String description, Double price, String category, String image) {
		super();
		this.title = title;
		this.description = description;
		this.price = price;
		this.category = category;
		this.image = image;
	}

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public String getTitle() {
		return title;
	}

	public void setTitle(String title) {
		this.title = title;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public Double getPrice() {
		return price;
	}

	public void setPrice(Double price) {
		this.price = price;
	}

	public String getCategory() {
		return category;
	}

	public void setCategory(String category) {
		this.category = category;
	}

	public String getImage() {
		return image;
	}

	public void setImage(String image) {
		this.image = image;
	}

	@Override
	public String toString() {
		return "Product [id=" + id + ", title=" + title + ", description=" + description + ", price=" + price
				+ ", category=" + category + ", image=" + image + "]";
	}

}
