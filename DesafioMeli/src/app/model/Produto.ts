import { Status } from './Status';

export class Produto {
  id: number;
  nome: string;
  categoria: number = 0;
  marca: string;
  imagem: string;
  status: Status;
}
