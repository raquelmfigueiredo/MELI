package com.desafiomeli.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.desafiomeli.model.ProdutoModel;

public interface ProdutoRepository extends JpaRepository<ProdutoModel, Long>{
	
}
