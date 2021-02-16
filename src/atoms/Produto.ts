 class Produto
{
    nome:string;
    qtd:number;
    prcComp:number;
    prcVend:number;
    constructor(nome:string, qtd:number, prcComp:number, prcVend:number) 
    {
        this.nome = nome;
        this.qtd = qtd;
        this.prcComp = prcComp;
        this.prcVend =  prcVend;    
    }
}
export default Produto;