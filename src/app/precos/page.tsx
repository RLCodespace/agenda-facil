import { Button } from "@/components/site/Button";
import { Card } from "@/components/site/Card";
import { SectionEyebrow } from "@/components/site/SectionEyebrow";
import styles from "./page.module.css";

const PLANS = [
  {
    name: "Essencial",
    description: "Pra quem esta comecando a automatizar o agendamento.",
    detail: "Ate 1 numero de WhatsApp e 1 agenda.",
  },
  {
    name: "Negocio",
    description: "Pra times com mais de um profissional atendendo.",
    detail: "Multiplas agendas e horarios por profissional.",
  },
  {
    name: "Sob medida",
    description: "Volume alto ou integracao especifica com seu negocio.",
    detail: "Fale com a gente pra desenhar o plano certo.",
  },
];

export default function Precos() {
  return (
    <main className={styles.main}>
      <section className={styles.header}>
        <SectionEyebrow>Precos</SectionEyebrow>
        <h1 className={styles.title}>Planos em definicao</h1>
        <p className={styles.subtitle}>
          Estamos fechando os valores finais. Fale com a gente pra saber a
          faixa de preco e reservar prioridade no lancamento.
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
