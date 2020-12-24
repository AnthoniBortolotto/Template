import Produto from "Produto.ts";

let db:IDBDatabase;
const nomeDB = "Banco";
const nomeLoja = "Produtos";

export function CriarDB()
{
    if(window.indexedDB)
    {
        const request = window.indexedDB.open(nomeDB, 2);
        request.onerror = (event) =>
        {
            console.log('erro na criação', event);
        }
        request.onsuccess = (event) =>
        {
            db = request.result;
            console.log("sucesso na criação", event, db);
        }
        request.onupgradeneeded = (event:any) =>
        {
            db = <IDBDatabase>event.target.result;
            let loja = db.createObjectStore(nomeLoja, {
                keyPath: 'id',
                autoIncrement: true
            });

            loja.createIndex('lat', 'lat', {unique: false});
            //loja.createIndex('lat', 'lat', {unique: false});

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