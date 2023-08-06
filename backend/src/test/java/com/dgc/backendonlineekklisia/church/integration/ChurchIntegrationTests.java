package com.dgc.backendonlineekklisia.church.integration;

import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.context.annotation.Import;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;

import com.dgc.backendonlineekklisia.church.controller.ChurchController;
import com.dgc.backendonlineekklisia.church.model.Church;
import com.dgc.backendonlineekklisia.utils.ChurchUtils;
import com.fasterxml.jackson.databind.ObjectMapper;

@SpringBootTest
@AutoConfigureMockMvc
@Import(ChurchController.class)
public class ChurchIntegrationTests {

    @Autowired
    private MockMvc mockMvc;

    @Autowired
    private ObjectMapper objectMapper;

    private Church validChurch;

    private final ChurchUtils churchUtils = new ChurchUtils();

    @BeforeEach
    public void setUp() {
        this.validChurch = churchUtils.randomValidChurchWithoutId();
    }

    @Test
    public void givenValidChurch_whenPostRequest_thenReturnHttpStatusCreatedAndObjectOnBody() throws Exception {

        mockMvc.perform(post("/v1/church").contentType(MediaType.APPLICATION_JSON)
                .content(objectMapper.writeValueAsString(validChurch))).andExpect(status().isCreated());
    }
}
