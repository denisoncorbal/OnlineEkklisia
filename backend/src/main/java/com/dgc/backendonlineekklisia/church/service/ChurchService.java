package com.dgc.backendonlineekklisia.church.service;

import org.springframework.stereotype.Service;

import com.dgc.backendonlineekklisia.church.model.Church;
import com.dgc.backendonlineekklisia.church.repository.ChurchRepository;

@Service
public class ChurchService {

    public ChurchService(ChurchRepository churchRepository) {
        this.churchRepository = churchRepository;
    }

    private ChurchRepository churchRepository;

    public Church create(Church newChurch) {
        return churchRepository.save(newChurch);
    }

}
