import Convidado from "../model/Convidado";
import validarConvidado from "./validarConvidado";

export default function complementarConvidado(convidado: Partial<Convidado>): Convidado {
    const erros = validarConvidado(convidado)
    if (erros.length > 0) {
        throw new Error(erros.join("\n"))
    }
    const qtdeAcompahantes = convidado.qtdeAcompanhantes ?? 0
    const temAcompanhantes = convidado.possuiAcompanhantes && convidado.confirmado && qtdeAcompahantes > 0

    const convidadoAtualizado = {
        ...convidado,
        qtdeAcompahantes: temAcompanhantes ? qtdeAcompahantes : 0,
        possuiAcompanhantes: temAcompanhantes
    }

    return convidadoAtualizado as Convidado
}