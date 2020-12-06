import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Produto } from '../model/produto';
import { ProdutoService } from '../services/produto.service';

@Component({
  selector: 'app-pagina-operador',
  templateUrl: './pagina-operador.component.html',
  styleUrls: ['./pagina-operador.component.css']
})
export class PaginaOperadorComponent implements OnInit {

  produto: Produto;
  idProduto: number;
  produtoService: ProdutoService;

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
    this.findProduto();
  }

  findProduto() {
    this.produtoService
    .getByIdProduto(this.idProduto)
    .subscribe((resp: Produto) => {
      this.produto = resp;
  });
}



}
