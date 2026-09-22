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
          organizando agenda por mensagem de WhatsApp.
        </p>
        <p>
          Nosso assistente de I.A conversa com o cliente final, mostra os
          horarios disponiveis, confirma ou cancela o agendamento — tudo
          dentro do WhatsApp que o negocio ja usa.
        </p>
        <p>
          O sistema e self-hosted: roda na infraestrutura do proprio negocio
          ou numa instancia dedicada. Nao processamos nem guardamos dinheiro
          de reserva — o pagamento continua sendo combinado direto entre o
          cliente e o dono do negocio.
        </p>
      </div>
    </main>
  );
}
