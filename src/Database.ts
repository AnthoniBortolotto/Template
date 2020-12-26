import Produto from "./Produto";
let db:IDBDatabase;
const nomeDB = "Banco";
const nomeLoja = "Produtos";

export function CriarDB()
{
    if(window.indexedDB)
    {
        const request = window.indexedDB.open(nomeDB, 2);
        request.onerror = (event) =>  console.log('erro na criação', event);
        request.onsuccess = (event) =>
        {
            db = request.result;
            console.log("sucesso na criação", event, db);
            montarTabela();
        }
        request.onupgradeneeded = (event:any) =>
        {
            db = <IDBDatabase>event.target.result;
            let loja = db.createObjectStore(nomeLoja, {
                keyPath: 'id',
                autoIncrement: true
            });

        }
    }
}
export function Adicionar(produto:Produto)
{
    const transaction = db.transaction([nomeLoja], "readwrite");
    const loja = transaction.objectStore(nomeLoja);

    loja.add(produto);
    transaction.oncomplete = () => console.log('adicionado');
    transaction.onerror = () => console.log('houve Erro');
}

export function montarTabela()
{
    let corpo = ``;
    let exibTransact = db.transaction(nomeLoja);
    let loja = exibTransact.objectStore(nomeLoja);
    let produtos:Array<Produto> = []

    loja.openCursor().onsuccess = (event:any) => {
        const cursor = event.target.result;
        console.log(cursor);
        if(cursor)
        {
            //aqui é undefined
            let produtoAtual = new Produto(cursor.value.nome, cursor.value.qtd, cursor.value.prcComp, cursor.value.prcVend)
            produtos.push(produtoAtual);
            console.log(produtos);
            cursor.continue();
        }
        else
        {
            
            console.log(produtos);
            produtos.forEach(produto => {
                    corpo += `<tr>
                <td>${produto.nome}</td>
                <td>${produto.qtd}</td>
                <td>${produto.prcComp}</td>
                <td>${produto.prcVend}</td>
                <td><a class="tabela__icone-lapis"></a><a class="tabela__icone-lixo"></a></td>
                    </tr>`;
                
            });
        }
        loja.openCursor().onerror = () => console.log("deu um erro");
        let tabela = document.querySelector('#corpo-tabela');
        tabela.innerHTML = corpo; 
    }
}