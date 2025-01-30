package com.dragonball.eComm.controllers;

import com.dragonball.eComm.model.Product;
import com.dragonball.eComm.services.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/ecomm/products")
@CrossOrigin(origins = "http://localhost:4200/")
public class ProductController {

    ProductService productService;

    @Autowired
    public ProductController(ProductService productService) {
        this.productService = productService;
    }

/**METHODS**/

    @GetMapping
    public List<Product> getAllProducts(){
        return productService.getAllProducts();
    }


//
//    @GetMapping("/{prodId}")
//    public ResponseEntity<Product> getProductById(@PathVariable int prodId){
//        return productService.getProductById(prodId)
//                .map(ResponseEntity::ok)
//                .orElse(ResponseEntity.notFound().build());
//    }
//
//    @PostMapping
//    public void addProduct(@RequestBody Product product){
//        productService.addAProduct(product);
//    }
//
//    @PutMapping
//    public void updateProduct(@RequestBody Product product){
//        productService.updateProduct(product);
//    }
//
//    @DeleteMapping("/{prodId}")
//    public void deleteProduct(@PathVariable int prodId){
//        productService.deleteProduct(prodId);
//    }
}
