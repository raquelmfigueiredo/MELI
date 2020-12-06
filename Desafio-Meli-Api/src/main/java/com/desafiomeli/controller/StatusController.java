package com.desafiomeli.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.desafiomeli.model.StatusModel;
import com.desafiomeli.repositories.StatusRepository;

@RestController
@RequestMapping("/status")
@CrossOrigin(origins = "*", allowedHeaders = "*" )

public class StatusController {
	
	@Autowired
	private StatusRepository repository;
	
	@GetMapping("/{id}")
	public ResponseEntity<StatusModel> GetById(@PathVariable long id){
		return repository.findById(id)
				.map(resp -> ResponseEntity.ok(resp))
				.orElse(ResponseEntity.notFound().build());
	}

}
