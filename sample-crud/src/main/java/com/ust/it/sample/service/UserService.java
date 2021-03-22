package com.ust.it.sample.service;

import com.ust.it.sample.entity.UserEntity;

import java.util.List;

public interface UserService {
    /**
     * finds user details from database by applying filter
     * @return
     */
    List<UserEntity> getUsers(UserEntity userFilter);

    /**
     * creates user record in db.
     * @param user
     * @return
     */
    UserEntity createUser(UserEntity user);

    /**
     * updates existing user records in db. if record does not exists creates a new and inserts.
     * @param user
     * @return
     */
    UserEntity updateUser(UserEntity user, Integer id);

    /**
     * removes a record by id from db.
     * @param id
     *
     */
    void deleteUser(Integer id);

}
