import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Produto } from '../model/produto';
import { ProdutoService } from '../services/produto.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  produto: Produto;
  idProduto: number;
  
  constructor(
   private router: Router,
   private produtoService: ProdutoService,
  ) { }

  ngOnInit(): void {
  }

  findProduto() {
      this.router.navigate(['/produto']);
      this.produtoService
      .getByIdProduto(this.idProduto)
      .subscribe((resp: Produto) => {
        this.produto = resp;
    });
  }

}
