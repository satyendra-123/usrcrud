package com.ust.it.sample.service.impl;

import com.ust.it.sample.entity.UserEntity;
import com.ust.it.sample.repo.UserRepository;
import com.ust.it.sample.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserServiceImpl implements UserService {

    @Autowired
    private UserRepository userRepo;


    @Override
    public List<UserEntity> getUsers(UserEntity userFilter) {
        return userRepo.findAll();
    }

    @Override
    public UserEntity createUser(UserEntity user) {
        return userRepo.save(user);
    }

    @Override
    public UserEntity updateUser(UserEntity user, Integer id) {
        if(id != null){
            UserEntity usr = userRepo.findById(id).orElseThrow();
            return userRepo.save(usr);
        }
        throw new RuntimeException(" Id is required ");
    }

    @Override
    public void deleteUser(Integer id) {
         userRepo.deleteById(id);
    }
}
