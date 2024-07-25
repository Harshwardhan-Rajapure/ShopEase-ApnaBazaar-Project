package com.apna.ApnaBazaarShopEase.Repository;
import org.springframework.data.jpa.repository.JpaRepository;
import com.apna.ApnaBazaarShopEase.Entity.Product;

public interface ProductRepository extends JpaRepository<Product, Long> {

}
