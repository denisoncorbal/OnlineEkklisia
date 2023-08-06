package com.dgc.backendonlineekklisia.church.repository;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;

import javax.sql.DataSource;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.jdbc.core.JdbcTemplate;

import com.dgc.backendonlineekklisia.church.model.Church;
import com.dgc.backendonlineekklisia.utils.ChurchUtils;

import jakarta.persistence.EntityManager;

@DataJpaTest
public class ChurchRepositoryTests {

    @Autowired
    private DataSource dataSource;

    @Autowired
    private JdbcTemplate jdbcTemplate;

    @Autowired
    private EntityManager entityManager;

    @Autowired
    private ChurchRepository churchRepository;

    private final ChurchUtils churchUtils = new ChurchUtils();

    private Church validChurch;

    @BeforeEach
    public void setUp() {
        this.validChurch = churchUtils.randomValidChurchWithoutId();
    }

    @Test
    void injectedComponentsAreNotNull() {
        assertNotNull(dataSource);
        assertNotNull(jdbcTemplate);
        assertNotNull(entityManager);
        assertNotNull(churchRepository);
    }

    @Test
    public void givenValidChurch_whenSave_thenPersistOnDatabase() {
        Church createdChurch = churchRepository.save(validChurch);
        Church databaseChurch = entityManager.find(Church.class, createdChurch.getId());

        assertNotNull(createdChurch);
        assertNotNull(createdChurch.getId());
        assertNotNull(databaseChurch);
        assertNotNull(databaseChurch.getId());
        assertEquals(createdChurch.getId(), databaseChurch.getId());
        assertEquals(createdChurch.getName(), databaseChurch.getName());
        assertEquals(createdChurch.getAbbreviation(), databaseChurch.getAbbreviation());
        assertEquals(createdChurch.getCnpj(), databaseChurch.getCnpj());
    }
}
