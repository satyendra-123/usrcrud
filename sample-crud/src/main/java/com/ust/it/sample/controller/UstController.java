package com.ust.it.sample.controller;

import com.ust.it.sample.entity.UserEntity;
import com.ust.it.sample.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Collections;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/user")
@CrossOrigin(origins = "http://localhost:3000", allowCredentials = "true", allowedHeaders = "*")

public class UstController {

    @Autowired
    private UserService userService;

     @GetMapping(produces = MediaType.APPLICATION_JSON_VALUE)
     public ResponseEntity<List<UserEntity>> getUser(@ModelAttribute UserEntity userFilter){
         return new ResponseEntity<>(userService.getUsers(userFilter), HttpStatus.OK);
     }

    @PostMapping(consumes = MediaType.APPLICATION_JSON_VALUE, produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<UserEntity> createUser(@RequestBody UserEntity user){
        return new ResponseEntity<>(userService.createUser(user), HttpStatus.OK);
    }

    @PutMapping(path="/{id}", consumes = MediaType.APPLICATION_JSON_VALUE, produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<UserEntity> updateUser(@RequestBody UserEntity user,
    @PathVariable Integer id
    ){
        return new ResponseEntity<>(userService.updateUser(user, id), HttpStatus.OK);
    }

    @DeleteMapping(path="/{id}")
    public ResponseEntity<Map<String, String>> deleteUser(@PathVariable Integer id){
        userService.deleteUser(id);
        return new ResponseEntity<>(Collections.singletonMap("status","success"), HttpStatus.OK);
    }

}
