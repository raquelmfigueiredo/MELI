import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Produto } from '../model/produto';
import { Status } from '../model/Status';
import { ProdutoService } from '../services/produto.service';
import { StatusService } from '../services/status.service';

@Component({
  selector: 'app-pagina-info',
  templateUrl: './pagina-info.component.html',
  styleUrls: ['./pagina-info.component.css']
})
export class PaginaInfoComponent implements OnInit {

  id: number;
  status: Status;
  produto: Produto;

  constructor(
    private produtoService: ProdutoService,
    private statusService: StatusService,
    private router: ActivatedRoute
  ) { }

  ngOnInit() {
    this.router.params.subscribe(params =>{
      this.id = +params['id'];
      console.log(this.id);
      this.findProduto();
    })
  }

  findProduto() {
    this.produtoService
    .getByIdProduto(this.id)
    .subscribe((resp: Produto) => {
      this.produto = resp;
      console.log(this.produto)
  });

  }
  
}
