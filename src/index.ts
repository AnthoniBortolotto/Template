import {Adicionar, CriarDB} from "./Database";
import $ from "jquery"
import Produto from "./Produto";
import Paginas from "./Paginas";

export async function Iniciar()
{
    await CriarDB();
    await Paginas.pagTabela();
}



Iniciar();

