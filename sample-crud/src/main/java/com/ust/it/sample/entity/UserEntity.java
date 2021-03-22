package com.ust.it.sample.entity;

import io.swagger.annotations.ApiModel;
import lombok.Data;

import javax.persistence.*;
import javax.validation.constraints.NotEmpty;

@ApiModel
@Entity
@Table(name="user")
@SequenceGenerator(name = "user_sq",  sequenceName = "user_sq", initialValue = 1)
@Data
public class UserEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY, generator="user_sq")
    private Integer id;

    @NotEmpty(message="name is required")
    @Column(name="name", nullable=false)
    private String name;

    @NotEmpty(message="email is required")
    @Column(name="email", nullable=false)
    private String email;

    @NotEmpty(message="Gender is required")
    @Column(name="gender")
    private String gender;

    @Column(name="phone_number")
    private Long phoneNumber;

}
