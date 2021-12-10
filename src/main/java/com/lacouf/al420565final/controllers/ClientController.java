package com.lacouf.al420565final.controllers;

import com.lacouf.al420565final.model.Client;
import com.lacouf.al420565final.util.ClientFactory;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/client")
@CrossOrigin(origins = "http://localhost:3000")
public class ClientController {

    @GetMapping("/all")
    public List<Client> getAll() {
        return ClientFactory.getClients().stream().collect(Collectors.toList());
    }

    @GetMapping("/ontarien")
    public List<Client> getOntariens() {
        return ClientFactory
                .getClients()
                .stream()
                .filter(client -> client.getProvince().equals("ON"))
                .collect(Collectors.toList());
    }

    @GetMapping("/male")
    public List<Client> getHommes() {
        return ClientFactory
                .getClients()
                .stream()
                .filter(client -> client.getGender().equals("M"))
                .collect(Collectors.toList());
    }

}
