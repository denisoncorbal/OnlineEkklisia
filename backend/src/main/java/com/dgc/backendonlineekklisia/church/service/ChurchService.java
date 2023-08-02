package com.dgc.backendonlineekklisia.church.service;

import java.util.List;

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

    public List<Church> read() {
        return churchRepository.findAll();
    }

    public Church readById(Long id) {
        return churchRepository.findById(id).get();
    }

}
