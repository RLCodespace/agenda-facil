import type { Metadata } from "next";
import { absoluteUrl } from "@/lib/site";
import { Button } from "@/components/site/Button";
import { Card } from "@/components/site/Card";
import styles from "./page.module.css";

const PLANS = [
  {
    name: "Essencial",
    description: "Para quem está começando a automatizar o agendamento.",
    detail: "Até 1 número de WhatsApp e 1 agenda.",
  },
  {
    name: "Negócio",
    description: "Para equipes com mais de um profissional em atendimento.",
    detail: "Múltiplas agendas e horários por profissional.",
  },
  {
    name: "Sob medida",
    description: "Alto volume de atendimentos ou integração específica com o seu negócio.",
    detail: "Fale conosco para desenharmos o plano ideal.",
  },
];

export const metadata: Metadata = {
  title: "Preços e planos do assistente de I.A. para agendamentos",
  description:
    "Planos do agenda-fácil para barbearias, salões e pequenos negócios. Fale conosco e reserve prioridade no lançamento.",
  alternates: { canonical: absoluteUrl("/precos") },
};

export default function Precos() {
  return (
    <main className={styles.main}>
      <section className={styles.header}>
        <h1 className={styles.title}>Planos em definição</h1>
        <p className={styles.subtitle}>
          Estamos definindo os valores finais. Fale conosco para conhecer a
          faixa de preço e reservar prioridade no lançamento.
        </p>
      </section>

      <section className={styles.plans}>
        {PLANS.map((plan) => (
          <Card key={plan.name} variant="pricing">
            <span className={styles.badge}>Em breve</span>
            <h2 className={styles.planName}>{plan.name}</h2>
            <p className={styles.planDescription}>{plan.description}</p>
            <p className={styles.planDetail}>{plan.detail}</p>
            <Button href="/contato" variant="secondary">
              Fale conosco
            </Button>
          </Card>
        ))}
      </section>
    </main>
  );
}
