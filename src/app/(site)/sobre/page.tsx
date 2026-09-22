import { SectionEyebrow } from "@/components/site/SectionEyebrow";
import styles from "./page.module.css";

export default function Sobre() {
  return (
    <main className={styles.main}>
      <SectionEyebrow>Sobre</SectionEyebrow>
      <h1 className={styles.title}>
        Tecnologia de I.A pra quem toca o negocio sozinho
      </h1>
      <div className={styles.body}>
        <p>
          O agenda-facil nasceu pra resolver um problema comum de barbearias,
          saloes e prestadores de servico pequenos: perder tempo (e clientes)
          organizando a agenda manualmente.
        </p>
        <p>
          Nosso assistente de I.A conversa com o cliente final, mostra os
          horarios disponiveis e confirma ou cancela o agendamento sozinho,
          a qualquer hora do dia.
        </p>
        <p>
          Nao processamos nem guardamos dinheiro de reserva — o pagamento
          continua sendo combinado direto entre o cliente e o dono do
          negocio.
        </p>
      </div>
    </main>
  );
}
