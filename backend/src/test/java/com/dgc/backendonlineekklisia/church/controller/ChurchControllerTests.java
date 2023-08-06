package com.dgc.backendonlineekklisia.church.controller;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;
import static org.junit.jupiter.api.Assertions.assertNull;
import static org.mockito.Mockito.doNothing;
import static org.mockito.Mockito.when;

import java.util.List;
import java.util.Random;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.Mockito;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.test.context.junit.jupiter.SpringExtension;

import com.dgc.backendonlineekklisia.church.model.Church;
import com.dgc.backendonlineekklisia.church.service.ChurchService;
import com.dgc.backendonlineekklisia.utils.ChurchUtils;

@ExtendWith(SpringExtension.class)
public class ChurchControllerTests {
    @Mock
    private ChurchService churchService;

    @InjectMocks
    private ChurchController churchController;

    private Church validChurchWithoutId;

    private Church validChurchWithId;

    private final ChurchUtils churchUtils = new ChurchUtils();

    private final Random RANDOM = new Random(System.currentTimeMillis());

    @BeforeEach
    public void setUp() {
        this.validChurchWithoutId = churchUtils.randomValidChurchWithoutId();
        this.validChurchWithId = churchUtils.randomValidChurchWithtId();
    }

    @Test
    public void givenValidChurchWithoutId_whenPostRequest_thenReturnChurchCreatedWithStatusCodeCreated() {
        when(churchService.create(validChurchWithoutId)).thenReturn(
            new Church(
                RANDOM.nextLong(),
                validChurchWithoutId.getName(),
                validChurchWithoutId.getAbbreviation(),
                validChurchWithoutId.getCnpj()
            )
        );

        ResponseEntity<Church> churchResponse = churchController.create(validChurchWithoutId);

        Mockito.verify(churchService, Mockito.times(1)).create(validChurchWithoutId);
        assertNotNull(churchResponse);
        Church createdChurch = churchResponse.getBody();
        assertNotNull(createdChurch);        
        assertEquals(HttpStatus.CREATED, churchResponse.getStatusCode());
        assertNotNull(createdChurch.getId());
        assertEquals(validChurchWithoutId.getName(), createdChurch.getName());
        assertEquals(validChurchWithoutId.getAbbreviation(), createdChurch.getAbbreviation());
        assertEquals(validChurchWithoutId.getCnpj(), createdChurch.getCnpj());
    }

    @Test
    public void givenValidChurchAndId_whenUpdateRequest_thenReturnChurchUpdatedWithStatusCodeOk() {
        when(churchService.updateById(validChurchWithId.getId(), validChurchWithId)).thenReturn(validChurchWithId);

        ResponseEntity<Church> churchResponse = churchController.updateById(validChurchWithId.getId(), validChurchWithId);

        Mockito.verify(churchService, Mockito.times(1)).updateById(validChurchWithId.getId(), validChurchWithId);
        
        assertNotNull(churchResponse);
        
        Church updatedChurch = churchResponse.getBody();
        
        assertNotNull(updatedChurch);        
        assertEquals(HttpStatus.OK, churchResponse.getStatusCode());
        assertEquals(validChurchWithId.getId(), updatedChurch.getId());
        assertEquals(validChurchWithId.getName(), updatedChurch.getName());
        assertEquals(validChurchWithId.getAbbreviation(), updatedChurch.getAbbreviation());
        assertEquals(validChurchWithId.getCnpj(), updatedChurch.getCnpj());
    }

    @Test
    public void givenValidChurchId_whenDeleteRequest_thenCallDeleteOnServiceAndReturnStatusCodeNoContent() {
        doNothing().when(churchService).deleteById(validChurchWithId.getId());

        ResponseEntity<?> churchResponse = churchController.deleteById(validChurchWithId.getId());

        Mockito.verify(churchService, Mockito.times(1)).deleteById(validChurchWithId.getId());

        assertNotNull(churchResponse);

        assertNull(churchResponse.getBody());

        assertEquals(HttpStatus.NO_CONTENT, churchResponse.getStatusCode());
    }

    @Test
    public void givenValidChurchId_whenGetRequest_thenReturnChurchSearchedWithStatusCodeOk() {
        when(churchService.readById(validChurchWithId.getId())).thenReturn(validChurchWithId);

        ResponseEntity<Church> churchResponse = churchController.readById(validChurchWithId.getId());

        Mockito.verify(churchService, Mockito.times(1)).readById(validChurchWithId.getId());
        
        assertNotNull(churchResponse);
        
        Church searchedChurch = churchResponse.getBody();
        
        assertNotNull(searchedChurch);        
        assertEquals(HttpStatus.OK, churchResponse.getStatusCode());
        assertEquals(validChurchWithId.getId(), searchedChurch.getId());
        assertEquals(validChurchWithId.getName(), searchedChurch.getName());
        assertEquals(validChurchWithId.getAbbreviation(), searchedChurch.getAbbreviation());
        assertEquals(validChurchWithId.getCnpj(), searchedChurch.getCnpj());
    }

    @Test
    public void givenRequest_whenGetRequest_thenReturnAllChurchesWithStatusCodeOk() {
        when(churchService.read()).thenReturn(
            List.of(
                churchUtils.randomValidChurchWithtId(),
                churchUtils.randomValidChurchWithtId(),
                churchUtils.randomValidChurchWithtId()
            )
        );

        ResponseEntity<List<Church>> churchResponse = churchController.read();

        Mockito.verify(churchService, Mockito.times(1)).read();
        
        assertNotNull(churchResponse);
        
        List<Church> churches = churchResponse.getBody();
        
        assertNotNull(churches);        
        assertEquals(HttpStatus.OK, churchResponse.getStatusCode());
        for(Church church : churches){
            assertNotNull(church.getId());
            assertNotNull(church.getName());
            assertNotNull(church.getAbbreviation());
            assertNotNull(church.getCnpj());
        }        
    }

}
