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

<<<<<<< HEAD
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
=======
  produto: Produto = new Produto();
  idProduto: number;
  produtoService: ProdutoService;

  constructor(
    
    private router: Router
  ) { }

  ngOnInit(): void {
    window.scroll(0, 0);

    this.findProduto();
>>>>>>> 10ddfe3219fd59ac27291c9b136c4b4b19f48262
  }
 

  findProduto() {
    this.produtoService
    .getByIdProduto(3)
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
