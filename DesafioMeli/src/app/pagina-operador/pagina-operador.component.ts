import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { Produto } from '../model/produto';
import { ProdutoService } from '../services/produto.service';

@Component({
  selector: 'app-pagina-operador',
  templateUrl: './pagina-operador.component.html',
  styleUrls: ['./pagina-operador.component.css']
})
export class PaginaOperadorComponent implements OnInit {

  produto: Produto;
  id: number;

  constructor(
    private router: ActivatedRoute,
    private produtoService: ProdutoService
  ) { }

  ngOnInit(){
    this.router.params.subscribe(params =>{
      this.id = params['idProduto'];
      this.findProduto();
    })
  }
 

  findProduto() {
    this.produtoService
    .getByIdProduto(3)
    .subscribe((resp: Produto) => {
      this.produto = resp;
  });
}



}
