import { Button } from "@/components/site/Button";
import { Card } from "@/components/site/Card";
import styles from "./page.module.css";

export default function Contato() {
  return (
    <main className={styles.main}>
      <h1 className={styles.title}>Fale conosco</h1>
      <p className={styles.subtitle}>
        Ainda não dispomos de formulário automático. Entre em contato
        diretamente por um dos canais abaixo e responderemos o mais breve possível.
      </p>

      <div className={styles.channels}>
        <Card variant="feature">
          <h2 className={styles.channelTitle}>WhatsApp</h2>
          <p className={styles.channelBody}>
            A resposta mais rápida é por aqui.
          </p>
          <Button
            href="https://wa.me/5500000000000"
            external
            variant="secondary"
          >
            Chamar no WhatsApp
          </Button>
        </Card>
        <Card variant="feature">
          <h2 className={styles.channelTitle}>E-mail</h2>
          <p className={styles.channelBody}>
            Para propostas mais detalhadas ou parcerias.
          </p>
          <Button
            href="mailto:contato@agendafacil.com.br"
            external
            variant="secondary"
          >
            contato@agendafacil.com.br
          </Button>
        </Card>
      </div>
    </main>
  );
}
