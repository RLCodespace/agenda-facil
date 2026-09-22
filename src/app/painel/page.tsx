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
  { id: 1, cliente: "Joao Pedro", servico: "Corte + Barba", horario: "Hoje, 14:00", status: "Confirmado" },
  { id: 2, cliente: "Marcos Lima", servico: "Corte", horario: "Hoje, 15:30", status: "Confirmado" },
  { id: 3, cliente: "Rafael Souza", servico: "Barba", horario: "Amanha, 09:00", status: "Aguardando" },
];

const COLUMNS: DataTableColumn<ProximoAgendamento>[] = [
  { key: "cliente", label: "Cliente" },
  { key: "servico", label: "Servico" },
  { key: "horario", label: "Horario" },
  { key: "status", label: "Status" },
];

export default function PainelDashboard() {
  return (
    <div>
      <PageHeader eyebrow="Painel" title="Dashboard" />

      <div className={styles.statGrid}>
        <StatCard label="Agendamentos hoje" value="6" hint="2 aguardando confirmacao" />
        <StatCard label="Proximo horario livre" value="16:00" />
        <StatCard label="Clientes novos no mes" value="12" />
      </div>

      <h2 className={styles.subtitle}>Proximos agendamentos</h2>
      <DataTable columns={COLUMNS} rows={PROXIMOS_AGENDAMENTOS} />
    </div>
  );
}
