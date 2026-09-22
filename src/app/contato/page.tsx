import { Button } from "@/components/site/Button";
import { Card } from "@/components/site/Card";
import { SectionEyebrow } from "@/components/site/SectionEyebrow";
import styles from "./page.module.css";

export default function Contato() {
  return (
    <main className={styles.main}>
      <SectionEyebrow>Contato</SectionEyebrow>
      <h1 className={styles.title}>Fale com a gente</h1>
      <p className={styles.subtitle}>
        Ainda nao temos formulario automatico — chama direto pelos canais
        abaixo que respondemos por la.
      </p>

      <div className={styles.channels}>
        <Card variant="feature">
          <h2 className={styles.channelTitle}>WhatsApp</h2>
          <p className={styles.channelBody}>
            Resposta mais rapida por aqui.
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
            Pra propostas mais detalhadas ou parcerias.
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
