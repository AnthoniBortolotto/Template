import Produto from "../atoms/Produto";
import { Store, set, get, keys, del } from "idb-keyval";
class Database {
    private static ObterDB(): Store {
        return new Store('Loja', 'Estoque');
    }
    private static keyDisponivel(): Promise<number> {
        let key = 0;
        return keys(this.ObterDB()).then(res => {
            res.forEach(chave => {
                key++;
            })
        }).then(res => { return key });
    }

    public static async adicionarProduto(produto: Produto): Promise<void> {
        let key = this.keyDisponivel();
        key.then(res => set(res, produto, this.ObterDB()));
    }
    public static obterProduto(id: number): Promise<Produto> {
        return get(id, this.ObterDB());
    }

    public static async procurarProduto(nome: string): Promise<boolean> {
        let key = 0;
        let objeto = await get(key, this.ObterDB()) as Produto;
        while (objeto !== undefined) {
            if (objeto.nome == nome) return true;
            key++;
            objeto = await get(key, this.ObterDB());
        }
        return false;
    }
    public static async procurarProdutoEditar(nome: string, nomeOriginal: string): Promise<boolean> {
        let key = 0;
        let objeto = await get(key, this.ObterDB()) as Produto;
        while (objeto !== undefined) {
            if (objeto.nome === nome && objeto.nome !== nomeOriginal) return true
            key++;
            objeto = await get(key, this.ObterDB());
        }
        return false;
    }
    public static async deletarProduto(id: number): Promise<void> {
        let idAtual = id;
        idAtual++;
        let objeto = await get(idAtual, this.ObterDB());
        while (objeto !== undefined) {
            idAtual--;
            del(idAtual, this.ObterDB());
            set(idAtual, objeto, this.ObterDB());
            idAtual++;
            idAtual++;
            objeto = await get(idAtual, this.ObterDB());
        }
        idAtual--;
        del(idAtual, this.ObterDB());
        return;
    }
    public static async editarProduto(id: number, produtoNovo: Produto): Promise<void> {
        del(id, this.ObterDB());
        set(id, produtoNovo, this.ObterDB());
    }
    public static async dadosTabela(): Promise<unknown[]> {
        let produtos: Array<unknown> = [];
        let key = 0;
        let objeto = await get(key, this.ObterDB());
        while (objeto !== undefined) {
            await produtos.push(objeto);
            key++;
            objeto = await get(key, this.ObterDB());
        }
        return produtos;
    }
}
export default Database;
