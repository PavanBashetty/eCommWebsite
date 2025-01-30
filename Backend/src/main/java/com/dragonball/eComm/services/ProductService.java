package com.dragonball.eComm.services;

import com.dragonball.eComm.model.Product;
import com.dragonball.eComm.repositories.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.*;

@Service
public class ProductService {

    ProductRepository productRepository;

    @Autowired
    public ProductService(ProductRepository productRepository) {
        this.productRepository = productRepository;
    }


    public List<Product> getAllProducts(){
        return productRepository.findAll();
    }

    public Optional<Product> getProductById(Integer prodId){
        return productRepository.findById(prodId);
    }

    public void addAProduct(Product product){
        productRepository.save(product);
    }

    public void updateProduct(Product product) {
        productRepository.save(product);
    }

    public void deleteProduct(Integer prodId) {
        productRepository.deleteById(prodId);
    }
}
