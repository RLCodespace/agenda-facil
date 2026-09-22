import styles from "./HeroConversation.module.css";

interface Message {
  from: "cliente" | "ia";
  text: string;
}

const MESSAGES: Message[] = [
  { from: "cliente", text: "Oi! Tem horario livre hoje a tarde?" },
  { from: "ia", text: "Tenho as 14h30 e as 16h. Qual prefere?" },
  { from: "cliente", text: "16h pra mim" },
  { from: "ia", text: "Prontinho, te espero as 16h." },
];

export function HeroConversation() {
  return (
    <div className={styles.card} aria-hidden="true">
      {MESSAGES.map((message, index) => (
        <div
          key={index}
          className={`${styles.bubble} ${
            message.from === "ia" ? styles.ia : styles.cliente
          }`}
        >
          {message.text}
        </div>
      ))}
    </div>
  );
}
