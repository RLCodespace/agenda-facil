import { PageHeader } from "@/components/painel/PageHeader";
import { DataTable, type DataTableColumn } from "@/components/painel/DataTable";

interface Agendamento {
  id: number;
  cliente: string;
  servico: string;
  data: string;
  status: string;
}

const AGENDAMENTOS: Agendamento[] = [
  { id: 1, cliente: "Joao Pedro", servico: "Corte + Barba", data: "21/09, 14:00", status: "Confirmado" },
  { id: 2, cliente: "Marcos Lima", servico: "Corte", data: "21/09, 15:30", status: "Confirmado" },
  { id: 3, cliente: "Rafael Souza", servico: "Barba", data: "22/09, 09:00", status: "Aguardando" },
  { id: 4, cliente: "Bruno Alves", servico: "Corte + Sobrancelha", data: "22/09, 10:30", status: "Confirmado" },
  { id: 5, cliente: "Diego Farias", servico: "Corte", data: "20/09, 17:00", status: "Concluido" },
  { id: 6, cliente: "Felipe Costa", servico: "Barba", data: "19/09, 16:00", status: "Cancelado" },
];

const COLUMNS: DataTableColumn<Agendamento>[] = [
  { key: "cliente", label: "Cliente" },
  { key: "servico", label: "Servico" },
  { key: "data", label: "Data" },
  { key: "status", label: "Status" },
];

export default function Agendamentos() {
  return (
    <div>
      <PageHeader eyebrow="Painel" title="Agendamentos" />
      <DataTable columns={COLUMNS} rows={AGENDAMENTOS} />
    </div>
  );
}
