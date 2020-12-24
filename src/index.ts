import {Adicionar, CriarDB} from "./Database";
import $ from "jquery"
import Produto from "./Produto";

async function Iniciar()
{
    await CriarDB();
    eventoBotao();
}

function eventoBotao()
{
    let botaoAdd = $('#botao');
    botaoAdd.on('click', () => Adicionar(new Produto("Jabuticaba", 12, 2.45, 6.00)));
}

Iniciar();

