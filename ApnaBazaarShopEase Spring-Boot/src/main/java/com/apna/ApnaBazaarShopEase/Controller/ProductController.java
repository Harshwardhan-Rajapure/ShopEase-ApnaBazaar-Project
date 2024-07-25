package com.apna.ApnaBazaarShopEase.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.apna.ApnaBazaarShopEase.Entity.Product;
import com.apna.ApnaBazaarShopEase.Service.ProductService;
import com.apna.ApnaBazaarShopEase.exception.ResourceNotFoundException;

@CrossOrigin
@RestController
@RequestMapping("apnaapi")
public class ProductController {

	@Autowired
	ProductService productService;

	@GetMapping("getallproducts")
	public List<Product> getAllProducts() {
		return productService.getAllProducts();
	}

	@PostMapping("postproduct")
	public Product createProduct(@RequestBody Product product) {
		return productService.createProduct(product);
	}

	@GetMapping("getproduct/{id}")
	public Product getProductById(@PathVariable Long id) {
		return productService.getProductById(id).orElseThrow(() -> new ResourceNotFoundException("Product not found"));
	}

	@PutMapping("putproduct/{id}")
	public Product updateProduct(@PathVariable Long id, @RequestBody Product productDetails) {
		return productService.updateProduct(id, productDetails);
	}

	@DeleteMapping("deleteproduct/{id}")
	public void deleteProduct(@PathVariable Long id) {
		productService.deleteProduct(id);
	}

}
