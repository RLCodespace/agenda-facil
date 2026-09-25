import { PageHeader } from "@/components/painel/PageHeader";
import { StatCard } from "@/components/painel/StatCard";
import { DataTable, type DataTableColumn } from "@/components/painel/DataTable";
import styles from "./page.module.css";

interface ProximoAgendamento {
  id: number;
  cliente: string;
  servico: string;
  horario: string;
  status: string;
}

const PROXIMOS_AGENDAMENTOS: ProximoAgendamento[] = [
  { id: 1, cliente: "João Pedro", servico: "Corte + Barba", horario: "Hoje, 14:00", status: "Confirmado" },
  { id: 2, cliente: "Marcos Lima", servico: "Corte", horario: "Hoje, 15:30", status: "Confirmado" },
  { id: 3, cliente: "Rafael Souza", servico: "Barba", horario: "Amanhã, 09:00", status: "Aguardando" },
];

const COLUMNS: DataTableColumn<ProximoAgendamento>[] = [
  { key: "cliente", label: "Cliente" },
  { key: "servico", label: "Serviço" },
  { key: "horario", label: "Horário" },
  { key: "status", label: "Status" },
];

export default function PainelDashboard() {
  return (
    <div>
      <PageHeader eyebrow="Painel" title="Dashboard" />

      <div className={styles.statGrid}>
        <StatCard label="Agendamentos hoje" value="6" hint="2 aguardando confirmação" />
        <StatCard label="Próximo horário livre" value="16:00" />
        <StatCard label="Clientes novos no mês" value="12" />
      </div>

      <h2 className={styles.subtitle}>Proximos agendamentos</h2>
      <DataTable columns={COLUMNS} rows={PROXIMOS_AGENDAMENTOS} />
    </div>
  );
}
