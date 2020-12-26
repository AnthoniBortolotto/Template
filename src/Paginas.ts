import Produto from "./Produto";
import {Adicionar} from "./Database";
import {Iniciar} from "./index"
export default class Paginas {
    
    public static pagTabela():void
    {
        let section = document.querySelector(".produtos");
        section.innerHTML = `<h3 class="text-center titulo">Bem vindo a lojinha</h3>
        <table class="table table-bordered tabela">
            <thead>
                <tr>
                    <td>Nome do produto</td>
                    <td>Quantidade</td>
                    <td>Preço de compra</td>
                    <td>Preço de venda</td>
                    <td>Ações</td>
                </tr>
            </thead>
            <tbody id="corpo-tabela">
            </tbody>
        </table>
        <input value="Adicionar Produto" id="btn-pag-add" class="btn btn-info botao-add" type="button">`;
        this.eventoBotaoAddPag();
    }
    public static eventoBotaoAddPag()
    {
        let botaoAdd = document.querySelector('#btn-pag-add');
        botaoAdd.addEventListener('click', () => this.pagAdd());
    }
    public static pagAdd()
    {
        let section = document.querySelector(".produtos");
        section.innerHTML = `<h3 class="text-center">Digite os dados do produto</h3>
        <form class="formulario border form-group form-check">
            <label class="formulario__etiqueta form-check-label">Nome do produto:</label>
            <input type="text" id="txt-nome" class="formulario__txt">
            <label class="formulario__etiqueta form-check-label">Quantidade: </label>
            <input type="text" id="txt-qtd" class="formulario__txt">
            <label class="formulario__etiqueta form-check-label">Preço de Compra:</label>
            <input type="text" id="txt-prc-comp" class="formulario__txt">
            <label class="formulario__etiqueta form-check-label">Preço de Venda:</label>
            <input type="text" id="txt-prc-vend" class="formulario__txt">
            <input type="button" value="Adicionar" id="btn-add" class="btn btn-info formulario__btn">
            <input type="button" value="Voltar" id="btn-voltar" class="btn btn-danger formulario__btn__voltar">
        </form>`;
        this.eventoBtnAdd();
        this.eventoBtnVoltar();
    }
    private static eventoBtnAdd()
    {
        let nome = <HTMLInputElement>document.querySelector("#txt-nome");
        let qtd = <HTMLInputElement>document.querySelector("#txt-qtd");
        let prcComp = <HTMLInputElement>document.querySelector("#txt-prc-comp");
        let prcVend = <HTMLInputElement> document.querySelector("#txt-prc-vend");
        let botao = document.querySelector("#btn-add");
        //bug aqui
        //prcCompParsed e prcVendParsed são undefined
        botao.addEventListener('click', () => {
            let produtoNovo = new Produto(nome.value, parseInt(qtd.value), Number.parseFloat(prcComp.value), Number.parseFloat(prcVend.value));      
            Adicionar(produtoNovo);
            Iniciar();
        });  
    }
    private static eventoBtnVoltar()
    {
        let botao = document.querySelector("#btn-voltar");
        botao.addEventListener('click', () => Iniciar());
    }
}