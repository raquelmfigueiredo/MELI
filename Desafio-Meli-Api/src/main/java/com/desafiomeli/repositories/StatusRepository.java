package com.desafiomeli.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.desafiomeli.model.StatusModel;

public interface StatusRepository extends JpaRepository<StatusModel, Long>{
	
}
