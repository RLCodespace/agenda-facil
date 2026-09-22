import { Button } from "@/components/site/Button";
import { Card } from "@/components/site/Card";
import { HeroGradient } from "@/components/site/HeroGradient";
import { SectionEyebrow } from "@/components/site/SectionEyebrow";
import styles from "./page.module.css";

const FEATURES = [
  {
    title: "Agendamento pelo WhatsApp",
    description:
      "Seu cliente marca, remarca ou cancela direto na conversa, sem baixar app nenhum.",
  },
  {
    title: "Horarios sempre atualizados",
    description:
      "O sistema mostra so os horarios livres da sua agenda, evitando choque de reservas.",
  },
  {
    title: "Atendimento com I.A",
    description:
      "Um assistente responde duvidas comuns e conduz o agendamento sozinho, 24/7.",
  },
  {
    title: "Self-hosted, sob seu controle",
    description:
      "Roda na sua propria infraestrutura. O pagamento das reservas continua direto com voce.",
  },
];

const STEPS = [
  {
    title: "Conecte seu WhatsApp",
    description: "Ligamos o numero do seu negocio via WAHA, sem trocar de numero.",
  },
  {
    title: "Configure sua agenda",
    description: "Defina servicos, duracao e horarios de funcionamento.",
  },
  {
    title: "Deixe a I.A atender",
    description: "Clientes agendam, cancelam e tiram duvidas sozinhos, a qualquer hora.",
  },
];

export default function Home() {
  return (
    <main className={styles.main}>
      <section className={styles.hero}>
        <HeroGradient />
        <SectionEyebrow>Atendimento automatizado</SectionEyebrow>
        <h1 className={styles.heroTitle}>
          Agendamento com I.A direto no WhatsApp do seu negocio
        </h1>
        <p className={styles.heroSubtitle}>
          Barbearias, saloes e pequenos negocios ganham um assistente que marca,
          remarca e cancela horarios sozinho — sem intermediar seu dinheiro.
        </p>
        <div className={styles.heroCtas}>
          <Button href="/contato">Comecar agora</Button>
          <Button href="/precos" variant="secondary">
            Ver precos
          </Button>
        </div>
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
