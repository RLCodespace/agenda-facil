import type { Metadata } from "next";
import { absoluteUrl } from "@/lib/site";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Sobre o agenda-fácil: I.A. de agendamento para pequenos negócios",
  description:
    "Conheça o agenda-fácil, assistente de I.A. que agenda, remarca e cancela horários pelo WhatsApp para barbearias, salões e prestadores de serviço.",
  alternates: { canonical: absoluteUrl("/sobre") },
};

export default function Sobre() {
  return (
    <main className={styles.main}>
      <h1 className={styles.title}>
        Tecnologia de I.A. para quem cuida do próprio negócio
      </h1>
      <div className={styles.body}>
        <p>
          O agenda-fácil nasceu para resolver um problema comum de barbearias,
          salões e pequenos prestadores de serviço: perder tempo (e clientes)
          organizando a agenda manualmente.
        </p>
        <p>
          Nosso assistente de I.A. conversa com o cliente final, apresenta os
          horários disponíveis e confirma ou cancela o agendamento
          automaticamente, a qualquer hora do dia.
        </p>
        <p>
          Não processamos nem armazenamos valores de reserva — o pagamento
          continua sendo combinado diretamente entre o cliente e o proprietário
          do negócio.
        </p>
      </div>
    </main>
  );
}
