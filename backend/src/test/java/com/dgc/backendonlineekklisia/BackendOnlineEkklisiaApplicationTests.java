package com.dgc.backendonlineekklisia;

import static org.junit.jupiter.api.Assertions.assertDoesNotThrow;

import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;

@SpringBootTest
class BackendOnlineEkklisiaApplicationTests {

	@Test
	void contextLoads() {
	}

	@Test
	public void givenRunCommand_whenRun_thenDontThrowError() {
		String[] args = { "" };
		assertDoesNotThrow(() -> BackendOnlineEkklisiaApplication.main(args));
	}

}
