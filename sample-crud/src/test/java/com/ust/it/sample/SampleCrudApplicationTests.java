package com.ust.it.sample;

import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.Base64;

@SpringBootTest
class SampleCrudApplicationTests {

	@Test
	void contextLoads() {
	}

	//@Test
	public void test(){
		System.out.println(new String(Base64.getEncoder().encode("ustuser".getBytes())) + " "+new String(Base64.getEncoder().encode("ustpassword".getBytes())));
	}

}
