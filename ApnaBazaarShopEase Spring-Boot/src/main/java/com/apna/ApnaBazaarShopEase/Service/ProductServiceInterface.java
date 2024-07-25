package com.apna.ApnaBazaarShopEase.Service;
import java.util.List;
import java.util.Optional;

import com.apna.ApnaBazaarShopEase.Entity.Product;
public interface ProductServiceInterface {

	
	List<Product> getAllProducts();
    Optional<Product> getProductById(Long id);
    Product createProduct(Product product);
    Product updateProduct(Long id, Product productDetails);
    void deleteProduct(Long id);
}
