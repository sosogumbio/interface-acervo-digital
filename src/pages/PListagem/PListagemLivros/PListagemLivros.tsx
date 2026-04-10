import { type JSX } from "react";
import Navegacao from "../../../components/Navegacao/Navegacao";
import ListagemLivros from "../../../components/Listagens/ListagemLivros/ListagemLivro";
import Rodape from "../../../components/Rodape/Rodape";

function PListagemLivros(): JSX.Element {
    return (
        <>
            <Navegacao />
            <ListagemLivros />
            <Rodape />
        </>
    );
}

export default PListagemLivros;
