import { ICategoria } from "./ICategoria";

export interface IProduto{
    id: number;
    nome: string;
    preco: number;
    quantidade: number;
    categoria: ICategoria;
}