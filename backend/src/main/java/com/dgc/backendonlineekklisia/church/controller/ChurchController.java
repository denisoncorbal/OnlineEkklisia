package com.dgc.backendonlineekklisia.church.controller;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.dgc.backendonlineekklisia.church.model.Church;
import com.dgc.backendonlineekklisia.church.service.ChurchService;

@RestController
@RequestMapping(value = "/v1/church")
@CrossOrigin(origins = "http://localhost:4200", methods = { RequestMethod.OPTIONS, RequestMethod.GET,
        RequestMethod.POST, RequestMethod.PUT, RequestMethod.DELETE })
public class ChurchController {

    public ChurchController(ChurchService churchService) {
        this.churchService = churchService;
    }

    private ChurchService churchService;

    @PostMapping
    public ResponseEntity<Church> create(@RequestBody Church newChurch) {
        return ResponseEntity.status(HttpStatus.CREATED).body(churchService.create(newChurch));

    }

    @GetMapping
    public ResponseEntity<List<Church>> read() {
        return ResponseEntity.ok(churchService.read());
    }
}
