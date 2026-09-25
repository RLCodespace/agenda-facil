import { PageHeader } from "@/components/painel/PageHeader";
import { StatCard } from "@/components/painel/StatCard";
import { DataTable, type DataTableColumn } from "@/components/painel/DataTable";
import styles from "./page.module.css";

interface ResumoServico {
  id: number;
  servico: string;
  atendimentos: number;
  receita: string;
}

const RESUMO_SERVICOS: ResumoServico[] = [
  { id: 1, servico: "Corte", atendimentos: 42, receita: "R$ 1.260,00" },
  { id: 2, servico: "Barba", atendimentos: 28, receita: "R$ 700,00" },
  { id: 3, servico: "Corte + Barba", atendimentos: 19, receita: "R$ 950,00" },
];

const COLUMNS: DataTableColumn<ResumoServico>[] = [
  { key: "servico", label: "Serviço" },
  { key: "atendimentos", label: "Atendimentos" },
  { key: "receita", label: "Receita" },
];

export default function Financeiro() {
  return (
    <div>
      <PageHeader eyebrow="Painel" title="Financeiro" />
      <p className={styles.notice}>
        Numeros informativos com base nos agendamentos concluidos. O
        agenda-facil nao processa nem armazena pagamentos — o valor e
        combinado direto entre voce e o cliente.
      </p>

      <div className={styles.statGrid}>
        <StatCard label="Receita do mês" value="R$ 2.910,00" />
        <StatCard label="Atendimentos no mês" value="89" />
        <StatCard label="Ticket médio" value="R$ 32,70" />
      </div>

      <h2 className={styles.subtitle}>Resumo por servico</h2>
      <DataTable columns={COLUMNS} rows={RESUMO_SERVICOS} />
    </div>
  );
}
