package com.desafiomeli.model;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;

import com.fasterxml.jackson.annotation.JsonManagedReference;


@Entity
@Table(name = "tb_produto" )
public class ProdutoModel {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;
	
	@NotNull
	private String categoria;
	@NotNull
	private String nome;
	@NotNull
	private String marca;
	@NotNull
	private String imagem;
	
	@JsonManagedReference
	@OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "status_id")
    private StatusModel status;
	
	public long getId() {
		return id;
	}
	public void setId(long id) {
		this.id = id;
	}
	public String getCategoria() {
		return categoria;
	}
	public void setCategoria(String categoria) {
		this.categoria = categoria;
	}
	public String getNome() {
		return nome;
	}
	public void setNome(String nome) {
		this.nome = nome;
	}
	public String getMarca() {
		return marca;
	}
	public void setMarca(String marca) {
		this.marca = marca;
	}
	public String getImagem() {
		return imagem;
	}
	public void setImagem(String imagem) {
		this.imagem = imagem;
	}

	public StatusModel getStatus() {
		return status;
	}
	public void setStatus(StatusModel status) {
		this.status = status;
	}
	
	
	
	
	
}
