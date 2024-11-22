import { Evento } from "@/core"
import InformacoesEvento from "./InformacoesEvento"

export interface DashBoardEventoProps {
    evento: Evento
}

export default function DashboardEvento(props: DashBoardEventoProps) {
    return (
        <div>
            <div>
               <InformacoesEvento evento={props.evento} />
            </div>
        </div>
    )
}