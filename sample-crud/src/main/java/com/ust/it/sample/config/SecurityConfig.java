package com.ust.it.sample.config;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;

import java.util.Base64;

@Configuration
public class SecurityConfig extends WebSecurityConfigurerAdapter {

    @Value("${api.user:dXN0dXNlcg==}")
    private String username;

    @Value("${api.password:dXN0cGFzc3dvcmQ=}")
    private String password;

    @Override
    protected void configure(HttpSecurity http) throws Exception {
        http.cors().and() .authorizeRequests().
                antMatchers("/api/user/**").
                authenticated().
                and().httpBasic().and().csrf().disable();
    }

    @Override
    protected void configure(AuthenticationManagerBuilder auth) throws Exception {
        auth.inMemoryAuthentication().withUser(new String(Base64.getDecoder().decode(username.getBytes())))
                .password("{noop}"+new String(Base64.getDecoder().decode(password.getBytes()))).roles("USER");
    }
}
