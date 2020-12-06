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

  produto: Produto = new Produto();
  idProduto: number;
  produtoService: ProdutoService;

  constructor(
    
    private router: Router
  ) { }

  ngOnInit(): void {
    window.scroll(0, 0);

    this.findProduto();
  }

  findProduto() {
    this.produtoService
    .getByIdProduto(this.idProduto)
    .subscribe((resp: Produto) => {
      this.produto = resp;
  });

}

getProduto(id: number) {
  this.idProduto = id;
  this.findProduto();
}

escanear() {
  this.router.navigate(['/pagina-info']);
}

}
