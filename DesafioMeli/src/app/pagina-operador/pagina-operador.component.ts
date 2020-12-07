import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router';
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
    private route: Router,
    private router: ActivatedRoute,
    private produtoService: ProdutoService
  ) { }

  ngOnInit(){
    this.router.params.subscribe(params =>{
      this.id = +params['id'];
      this.findProduto();
    })
  }
 

  findProduto() {
    this.produtoService
    .getByIdProduto(this.id)
    .subscribe((resp: Produto) => {
      this.produto = resp;
  });

}

escanear() {
  this.route.navigate(['/pagina-info', this.id]);
}

}
