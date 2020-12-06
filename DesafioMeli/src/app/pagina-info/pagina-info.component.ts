import { Component, Input, OnInit } from '@angular/core';
import { Produto } from '../model/produto';
import { ProdutoService } from '../services/produto.service';

@Component({
  selector: 'app-pagina-info',
  templateUrl: './pagina-info.component.html',
  styleUrls: ['./pagina-info.component.css']
})
export class PaginaInfoComponent implements OnInit {

  produto: Produto;
  @Input()
  id: number;

  constructor(
    private produtoService: ProdutoService,
  ) { }

  ngOnInit() {
  }

  findProduto() {
    this.produtoService.getByIdProduto(this.id).subscribe((resp: Produto) => {
      this.produto = resp;
    });
  }

}
