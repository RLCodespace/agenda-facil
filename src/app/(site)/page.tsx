import { Button } from "@/components/site/Button";
import { Card } from "@/components/site/Card";
import { HeroConversation } from "@/components/site/HeroConversation";
import { HeroGradient } from "@/components/site/HeroGradient";
import { SectionEyebrow } from "@/components/site/SectionEyebrow";
import styles from "./page.module.css";

const FEATURES = [
  {
    title: "Atendimento automatico e inteligente",
    description:
      "Um assistente de I.A conversa, agenda, remarca e cancela sozinho — sem voce precisar responder mensagem.",
  },
  {
    title: "Agenda sempre organizada",
    description:
      "So aparecem os horarios realmente livres, sem choque de reservas nem confusao.",
  },
  {
    title: "Disponivel a qualquer hora",
    description:
      "Seu negocio atende e agenda clientes 24 horas por dia, mesmo fora do expediente.",
  },
  {
    title: "Voce no controle do seu dinheiro",
    description:
      "O pagamento da reserva e combinado direto com o cliente — nada passa pela nossa mao.",
  },
];

const STEPS = [
  {
    title: "Cadastre seu negocio",
    description: "Configure servicos, horarios e equipe em poucos minutos.",
  },
  {
    title: "Ative o atendimento automatico",
    description: "A I.A passa a responder e agendar seus clientes por voce.",
  },
  {
    title: "Acompanhe pelo painel",
    description: "Veja agendamentos, clientes e financeiro tudo num so lugar.",
  },
];

export default function Home() {
  return (
    <main className={styles.main}>
      <section className={styles.hero}>
        <HeroGradient />
        <div className={styles.heroText}>
          <SectionEyebrow>Atendimento automatizado</SectionEyebrow>
          <h1 className={styles.heroTitle}>
            Atendimento automatizado com I.A pro seu negocio
          </h1>
          <p className={styles.heroSubtitle}>
            Barbearias, saloes e pequenos negocios ganham um assistente que atende,
            agenda, remarca e cancela sozinho — voce so cuida do que importa.
          </p>
          <div className={styles.heroCtas}>
            <Button href="/contato">Comecar agora</Button>
            <Button href="/precos" variant="secondary">
              Ver precos
            </Button>
          </div>
        </div>
        <HeroConversation />
      </section>

      <section className={styles.section}>
        <SectionEyebrow>O que voce ganha</SectionEyebrow>
        <h2 className={styles.sectionTitle}>Feito pra quem cuida do negocio sozinho</h2>
        <div className={styles.featureGrid}>
          {FEATURES.map((feature) => (
            <Card key={feature.title} variant="feature">
              <h3 className={styles.cardTitle}>{feature.title}</h3>
              <p className={styles.cardBody}>{feature.description}</p>
            </Card>
          ))}
        </div>
      </section>

      <section className={styles.section}>
        <SectionEyebrow>Como funciona</SectionEyebrow>
        <h2 className={styles.sectionTitle}>Tres passos pra sair do papel</h2>
        <div className={styles.steps}>
          {STEPS.map((step, index) => (
            <div key={step.title} className={styles.step}>
              <span className={styles.stepNumber}>{index + 1}</span>
              <div>
                <h3 className={styles.cardTitle}>{step.title}</h3>
                <p className={styles.cardBody}>{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className={styles.ctaBand}>
        <h2 className={styles.sectionTitle}>Pronto pra automatizar seus agendamentos?</h2>
        <Button href="/contato">Falar com a gente</Button>
      </section>
    </main>
  );
}
