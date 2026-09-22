import { PageHeader } from "@/components/painel/PageHeader";
import { DataTable, type DataTableColumn } from "@/components/painel/DataTable";

interface Cliente {
  id: number;
  nome: string;
  telefone: string;
  ultimoAgendamento: string;
  totalVisitas: number;
}

const CLIENTES: Cliente[] = [
  { id: 1, nome: "Joao Pedro", telefone: "(11) 90000-0001", ultimoAgendamento: "21/09/2026", totalVisitas: 14 },
  { id: 2, nome: "Marcos Lima", telefone: "(11) 90000-0002", ultimoAgendamento: "21/09/2026", totalVisitas: 6 },
  { id: 3, nome: "Rafael Souza", telefone: "(11) 90000-0003", ultimoAgendamento: "22/09/2026", totalVisitas: 2 },
  { id: 4, nome: "Bruno Alves", telefone: "(11) 90000-0004", ultimoAgendamento: "22/09/2026", totalVisitas: 9 },
];

const COLUMNS: DataTableColumn<Cliente>[] = [
  { key: "nome", label: "Nome" },
  { key: "telefone", label: "Telefone" },
  { key: "ultimoAgendamento", label: "Ultimo agendamento" },
  { key: "totalVisitas", label: "Total de visitas" },
];

export default function Clientes() {
  return (
    <div>
      <PageHeader eyebrow="Painel" title="Clientes" />
      <DataTable columns={COLUMNS} rows={CLIENTES} />
    </div>
  );
}
