package com.ust.it.sample.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Primary;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;
import springfox.documentation.builders.RequestHandlerSelectors;
import springfox.documentation.spi.DocumentationType;
import springfox.documentation.spring.web.plugins.Docket;
import springfox.documentation.swagger2.annotations.EnableSwagger2;

import static com.google.common.base.Predicates.and;

@Configuration
@EnableSwagger2
public class SwaggerConfig {
    @SuppressWarnings("unchecked")
    @Primary
    @Bean
    public Docket spacesDocket() {
        return new Docket(DocumentationType.SWAGGER_2).groupName("com.ust.it.sample").select()
                .apis(and(RequestHandlerSelectors.basePackage("com.ust.it.sample"))).build();
    }

    @Bean
    public WebMvcConfigurer corsConfigurer() {
        return new WebMvcConfigurer() {
            @Override
            public void addCorsMappings(CorsRegistry registry) {
                registry.addMapping("/**").allowedMethods("GET", "PUT", "POST", "DELETE", "OPTIONS");
            }
        };
    }
}
