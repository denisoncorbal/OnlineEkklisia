package com.dgc.backendonlineekklisia.church.service;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.doNothing;
import static org.mockito.Mockito.when;

import java.util.List;
import java.util.Optional;
import java.util.Random;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.Mockito;
import org.springframework.test.context.junit.jupiter.SpringExtension;

import com.dgc.backendonlineekklisia.church.model.Church;
import com.dgc.backendonlineekklisia.church.repository.ChurchRepository;
import com.dgc.backendonlineekklisia.utils.ChurchUtils;

@ExtendWith(SpringExtension.class)
public class ChurchServiceTests {
    @Mock
    ChurchRepository churchRepository;

    @InjectMocks
    ChurchService churchService;

    private final ChurchUtils churchUtils = new ChurchUtils();

    private Church validChurchWithouId;

    private Church validChurchWithId;

    private final Random RANDOM = new Random(System.currentTimeMillis());

    @BeforeEach
    public void setUp() {
        this.validChurchWithouId = churchUtils.randomValidChurchWithoutId();
        this.validChurchWithId = churchUtils.randomValidChurchWithtId();
    }

    @Test
    public void givenValidChurchWithoutId_whenInputChurch_thenReturnCreatedChurch(){
        when(churchRepository.save(validChurchWithouId)).thenReturn(new Church(
            RANDOM.nextLong(),
            validChurchWithouId.getName(),
            validChurchWithouId.getAbbreviation(),
            validChurchWithouId.getCnpj()
        ));

        Church createdChurch = churchService.create(validChurchWithouId);

        Mockito.verify(churchRepository, Mockito.times(1)).save(validChurchWithouId);              
        assertNotNull(createdChurch);                
        assertNotNull(createdChurch.getId());
        assertEquals(validChurchWithouId.getName(), createdChurch.getName());
        assertEquals(validChurchWithouId.getAbbreviation(), createdChurch.getAbbreviation());
        assertEquals(validChurchWithouId.getCnpj(), createdChurch.getCnpj());
    }

    @Test
    public void givenValidChurchWithId_whenUpdateChurch_thenReturnUpdatedChurch() {
        Church updateRequestChurch = churchUtils.randomValidChurchWithoutId();
        updateRequestChurch.setId(validChurchWithId.getId());

        when(churchRepository.findById(updateRequestChurch.getId())).thenReturn(Optional.of(validChurchWithId));

        when(churchRepository.save(any(Church.class))).thenReturn(updateRequestChurch);

        Church updatedChurch = churchService.updateById(
                updateRequestChurch.getId(), updateRequestChurch);

        Mockito.verify(churchRepository, Mockito.times(1)).save(any(Church.class));
        Mockito.verify(churchRepository, Mockito.times(1)).findById(updateRequestChurch.getId());
        assertNotNull(updatedChurch);
        assertEquals(updateRequestChurch.getId(), updatedChurch.getId());
        assertEquals(updateRequestChurch.getName(), updatedChurch.getName());
        assertEquals(updateRequestChurch.getAbbreviation(), updatedChurch.getAbbreviation());
        assertEquals(updateRequestChurch.getCnpj(), updatedChurch.getCnpj());
    }

    @Test
    public void givenValidIdAndChurchWithoutChange_whenUpdateChurch_thenReturnSameChurch() {        
        when(churchRepository.findById(validChurchWithId.getId())).thenReturn(Optional.of(validChurchWithId));

        when(churchRepository.save(validChurchWithId)).thenReturn(validChurchWithId);

        Church updatedChurch = churchService.updateById(
                validChurchWithId.getId(), validChurchWithId);

        Mockito.verify(churchRepository, Mockito.times(1)).save(validChurchWithId);
        Mockito.verify(churchRepository, Mockito.times(1)).findById(validChurchWithId.getId());
        assertNotNull(updatedChurch);
        assertEquals(validChurchWithId.getId(), updatedChurch.getId());
        assertEquals(validChurchWithId.getName(), updatedChurch.getName());
        assertEquals(validChurchWithId.getAbbreviation(), updatedChurch.getAbbreviation());
        assertEquals(validChurchWithId.getCnpj(), updatedChurch.getCnpj());
    }

    @Test
    public void givenValidChurchId_whenReadById_thenReturnValidChurchWithId(){
        when(churchRepository.findById(validChurchWithId.getId())).thenReturn(Optional.of(validChurchWithId));

        Church searchedChurch = churchService.readById(validChurchWithId.getId());

        Mockito.verify(churchRepository, Mockito.times(1)).findById(validChurchWithId.getId());              
        assertNotNull(searchedChurch);
        assertEquals(validChurchWithId.getId(), searchedChurch.getId());
        assertEquals(validChurchWithId.getName(), searchedChurch.getName());
        assertEquals(validChurchWithId.getAbbreviation(), searchedChurch.getAbbreviation());
        assertEquals(validChurchWithId.getCnpj(), searchedChurch.getCnpj());
    }

    @Test
    public void givenValidChurchId_whenDeleteById_thenCallDeleteOnRepository() {
        doNothing().when(churchRepository).deleteById(validChurchWithId.getId());

        churchService.deleteById(validChurchWithId.getId());

        Mockito.verify(churchRepository, Mockito.times(1)).deleteById(validChurchWithId.getId());
    }

    @Test
    public void givenRequestToAllChurches_whenReadAll_thenReturnAllChurches(){
        when(churchRepository.findAll()).thenReturn(
            List.of(
                churchUtils.randomValidChurchWithtId(),
                churchUtils.randomValidChurchWithtId(),
                churchUtils.randomValidChurchWithtId()
            )
        );

        List<Church> searchedChurches = churchService.read();

        Mockito.verify(churchRepository, Mockito.times(1)).findAll();              
        assertNotNull(searchedChurches);
        assertEquals(3, searchedChurches.size());
        for(Church church : searchedChurches){
            assertNotNull(church.getId());
            assertNotNull(church.getName());
            assertNotNull(church.getAbbreviation());
            assertNotNull(church.getCnpj());
        }        
    }
}
