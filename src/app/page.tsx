import type { Metadata } from "next";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { Button } from "@/components/site/Button";
import { Card } from "@/components/site/Card";
import { HeroConversation } from "@/components/site/HeroConversation";
import { HeroGradient } from "@/components/site/HeroGradient";
import { Reveal } from "@/components/site/Reveal";
import { JsonLd } from "@/components/site/JsonLd";
import { absoluteUrl, CONTACT_EMAIL, SITE_DESCRIPTION, SITE_NAME, SITE_URL } from "@/lib/site";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: {
    absolute: "Agendamento pelo WhatsApp com I.A. para barbearias e salões | agenda·fácil",
  },
  description:
    "Assistente de I.A. que agenda, remarca e cancela pelo WhatsApp 24h. Menos faltas, agenda organizada e mais tempo para o seu negócio.",
  alternates: { canonical: absoluteUrl("/") },
};

const FAQ = [
  {
    question: "O que é um assistente de I.A. para agendamentos no WhatsApp?",
    answer:
      "É um atendente virtual que conversa com o seu cliente, mostra os horários livres e agenda, remarca ou cancela sem que você precise responder a cada mensagem.",
  },
  {
    question: "Como funciona o agendamento automático?",
    answer:
      "O cliente escolhe o serviço, o dia e o horário na conversa. O assistente oferece apenas horários realmente livres e confirma a reserva na hora.",
  },
  {
    question: "O assistente atende fora do horário de expediente?",
    answer:
      "Sim. O atendimento funciona 24 horas por dia, inclusive à noite, aos fins de semana e feriados.",
  },
  {
    question: "Serve para barbearia, salão de beleza e outros serviços?",
    answer:
      "Sim. Foi pensado para barbearias, salões e pequenos prestadores de serviço que trabalham com hora marcada.",
  },
  {
    question: "O agenda-fácil recebe o pagamento das reservas?",
    answer:
      "Não. O pagamento é combinado diretamente entre o cliente e o dono do negócio; nenhum valor passa pelo agenda-fácil.",
  },
  {
    question: "Quanto custa?",
    answer:
      "Os planos ainda estão sendo definidos. Fale conosco para conhecer a faixa de preço e reservar prioridade no lançamento.",
  },
];

const LEAD_FEATURE = {
  title: "Atendimento automático e inteligente",
  description:
    "Um assistente de I.A. conversa, agenda, remarca e cancela por você, sem que precise responder a nenhuma mensagem.",
};

const FEATURES = [
  {
    title: "Agenda sempre organizada",
    description:
      "Apenas os horários realmente livres são oferecidos, sem choque de reservas nem confusão.",
  },
  {
    title: "Disponível a qualquer hora",
    description:
      "O seu negócio atende e agenda clientes 24 horas por dia, mesmo fora do expediente.",
  },
  {
    title: "Você no controle do seu dinheiro",
    description:
      "O pagamento da reserva é combinado diretamente com o cliente. Nada passa por nós.",
  },
];

const STEPS = [
  {
    title: "Cadastre o seu negócio",
    description: "Configure serviços, horários e equipe em poucos minutos.",
  },
  {
    title: "Ative o atendimento automático",
    description: "A I.A. passa a responder e a agendar os seus clientes por você.",
  },
  {
    title: "Acompanhe pelo painel",
    description:
      "Veja agendamentos, clientes e financeiro reunidos em um só lugar.",
  },
];

export default function Home() {
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "Organization",
              "@id": `${SITE_URL}/#organization`,
              name: SITE_NAME,
              url: absoluteUrl("/"),
              email: CONTACT_EMAIL,
            },
            {
              "@type": "WebSite",
              "@id": `${SITE_URL}/#website`,
              url: absoluteUrl("/"),
              name: SITE_NAME,
              inLanguage: "pt-BR",
              publisher: { "@id": `${SITE_URL}/#organization` },
            },
            {
              "@type": "SoftwareApplication",
              name: SITE_NAME,
              applicationCategory: "BusinessApplication",
              operatingSystem: "Web",
              description: SITE_DESCRIPTION,
              url: absoluteUrl("/"),
              inLanguage: "pt-BR",
            },
            {
              "@type": "FAQPage",
              mainEntity: FAQ.map((item) => ({
                "@type": "Question",
                name: item.question,
                acceptedAnswer: { "@type": "Answer", text: item.answer },
              })),
            },
          ],
        }}
      />
      <Header />
      <main className={styles.main}>
        <section className={styles.hero}>
          <HeroGradient />
          <div className={styles.heroInner}>
            <div className={styles.heroText}>
              <h1 className={styles.heroTitle}>
                Sua agenda cheia,{" "}
                <em className={styles.heroEm}>
                  mesmo quando você não pode responder.
                </em>
              </h1>
              <p className={styles.heroSubtitle}>
                Barbearias, salões e pequenos negócios ganham um assistente de
                I.A. que atende, agenda, remarca e cancela por você, para que o
                seu tempo seja dedicado ao que realmente importa.
              </p>
              <div className={styles.heroCtas}>
                <Button href="/contato">Começar agora</Button>
                <Button href="/precos" variant="secondary">
                  Ver preços
                </Button>
              </div>
            </div>
            <HeroConversation />
          </div>
        </section>

        <section className={styles.section}>
          <Reveal>
            <h2 className={styles.sectionTitle}>
              Feito para quem cuida do próprio negócio
            </h2>
          </Reveal>
          <div className={styles.bento}>
            <Reveal className={styles.lead}>
              <div className={styles.leadCard}>
                <h3 className={styles.leadTitle}>{LEAD_FEATURE.title}</h3>
                <p className={styles.leadBody}>{LEAD_FEATURE.description}</p>
              </div>
            </Reveal>
            {FEATURES.map((feature, index) => (
              <Reveal key={feature.title} delay={(index + 1) * 90}>
                <Card variant="feature">
                  <h3 className={styles.cardTitle}>{feature.title}</h3>
                  <p className={styles.cardBody}>{feature.description}</p>
                </Card>
              </Reveal>
            ))}
          </div>
        </section>

        <section className={styles.band}>
          <div className={styles.section}>
            <Reveal>
              <h2 className={styles.sectionTitle}>
                Três passos para sair do papel
              </h2>
            </Reveal>
            <ol className={styles.steps}>
              {STEPS.map((step, index) => (
                <li key={step.title} className={styles.step}>
                  <Reveal delay={index * 120}>
                    <span className={styles.stepNumber}>{index + 1}</span>
                    <h3 className={styles.cardTitle}>{step.title}</h3>
                    <p className={styles.cardBody}>{step.description}</p>
                  </Reveal>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className={styles.section}>
          <Reveal>
            <h2 className={styles.sectionTitle}>Perguntas frequentes</h2>
          </Reveal>
          <div className={styles.faq}>
            {FAQ.map((item) => (
              <details key={item.question} className={styles.faqItem}>
                <summary className={styles.faqQuestion}>{item.question}</summary>
                <p className={styles.faqAnswer}>{item.answer}</p>
              </details>
            ))}
          </div>
        </section>

        <section className={styles.ctaBand}>
          <Reveal className={styles.ctaInner}>
            <h2 className={styles.ctaTitle}>
              Pronto para automatizar os seus agendamentos?
            </h2>
            <Button href="/contato" variant="secondary">
              Fale conosco
            </Button>
          </Reveal>
        </section>
      </main>
      <Footer />
    </>
  );
}
