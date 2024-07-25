package com.apna.ApnaBazaarShopEase.Service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.apna.ApnaBazaarShopEase.Entity.Product;
import com.apna.ApnaBazaarShopEase.Repository.ProductRepository;
import com.apna.ApnaBazaarShopEase.exception.ResourceNotFoundException;

@Service
public class ProductService implements ProductServiceInterface {

	@Autowired
	ProductRepository productRepository;

	@Override
    public List<Product> getAllProducts() {
        return productRepository.findAll();
    }

    @Override
    public Optional<Product> getProductById(Long id) {
        return productRepository.findById(id);
    }

    @Override
    public Product createProduct(Product product) {
        return productRepository.save(product);
    }

    @Override
    public Product updateProduct(Long id, Product productDetails) {
        return productRepository.findById(id).map(product -> {
            product.setTitle(productDetails.getTitle());
            product.setDescription(productDetails.getDescription());
            product.setPrice(productDetails.getPrice());
            product.setImage(productDetails.getImage());
            return productRepository.save(product);
        }).orElseThrow(() -> new ResourceNotFoundException("Product not found"));
    }

    @Override
    public void deleteProduct(Long id) {
    	Product product = productRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Product not found"));
        productRepository.delete(product);
    }
}
