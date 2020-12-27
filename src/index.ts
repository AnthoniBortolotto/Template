import {Adicionar, CriarDB} from "./Database";
import $ from "jquery"
import Produto from "./Produto";
import Paginas from "./Paginas";
import "../css/index.css";
import "../css/menu.css";
import "../css/form-add.css";
import "../css/tabela.css";
import "../css/bootstrap.min.css";

export async function Iniciar()
{
    await CriarDB();
    await Paginas.pagTabela();
}



Iniciar();

