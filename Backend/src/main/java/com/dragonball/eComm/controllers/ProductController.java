package com.dragonball.eComm.controllers;

import com.dragonball.eComm.model.Product;
import com.dragonball.eComm.services.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

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
    public ResponseEntity<List<Product>> getAllProducts(){
        return new ResponseEntity<>(productService.getAllProducts(), HttpStatus.OK);
    }

    @GetMapping("/{prodId}")
    public ResponseEntity<Product> getProductById(@PathVariable Integer prodId){
        return productService.getProductById(prodId)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    @PostMapping("/addproduct")
    public  ResponseEntity<?> addAProduct(@RequestPart Product product, @RequestPart MultipartFile imageFile){
        try {
            Product savedProduct = productService.addAProduct(product,imageFile);
            return new ResponseEntity<>(savedProduct, HttpStatus.CREATED);
        } catch (Exception e) {
            return new ResponseEntity<>("Error adding product " + e.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @GetMapping("/{prodId}/image")
    public ResponseEntity<byte[]> getImageByProductId(@PathVariable Integer prodId){

        Product product = productService.getProductById(prodId)
                .orElseThrow(()->new RuntimeException("Product with id: " + prodId + " not found"));

        byte[] imageFile = product.getImageDate();
        return ResponseEntity.ok()
                .contentType(MediaType.valueOf(product.getImageType()))
                .body(imageFile);
    }


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
