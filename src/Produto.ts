export default class Produto
{
    nome:string;
    qtd:number;
    PrcComp:number;
    PrcVend:number;
    constructor(nome:string, qtd:number, PrcComp:number, PrcVend:number) 
    {
        this.nome = nome;
        this.qtd = qtd;
        this.PrcComp = PrcComp;
        this.PrcVend =  PrcVend;    
    }
}