"use client";

import { useEffect, useState } from "react";
import styles from "./HeroConversation.module.css";

type Phase = "hidden" | "typing" | "text";

interface Message {
  from: "cliente" | "ia";
  text: string;
}

const MESSAGES: Message[] = [
  { from: "cliente", text: "Olá! Há horário livre hoje à tarde?" },
  { from: "ia", text: "Olá! Tenho às 14h30 e às 16h. Qual prefere?" },
  { from: "cliente", text: "16h, por favor." },
  { from: "ia", text: "Agendado! Sua reserva está confirmada para hoje, às 16h." },
];

// Linha do tempo (ms) de cada etapa; a última etapa exibe a confirmação.
// Antes de cada resposta da I.A. o indicador de digitação aparece.
const TIMELINE = [700, 1400, 2900, 4300, 5200, 6800, 7900];
const HOLD_MS = 5500;
const FINAL_STEP = TIMELINE.length;

export function HeroConversation() {
  const [step, setStep] = useState(0);

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let timers: number[] = [];

    if (reduced) {
      timers = [window.setTimeout(() => setStep(FINAL_STEP), 0)];
      return () => timers.forEach(window.clearTimeout);
    }

    const play = () => {
      setStep(0);
      timers = TIMELINE.map((at, index) =>
        window.setTimeout(() => setStep(index + 1), at),
      );
      timers.push(
        window.setTimeout(play, TIMELINE[FINAL_STEP - 1] + HOLD_MS),
      );
    };
    play();
    return () => timers.forEach(window.clearTimeout);
  }, []);

  // Etapas: 1 cliente, 2 digitando (I.A.), 3 I.A., 4 cliente, 5 digitando (I.A.), 6 I.A.
  const phases: Phase[] = [
    step >= 1 ? "text" : "hidden",
    step >= 3 ? "text" : step === 2 ? "typing" : "hidden",
    step >= 4 ? "text" : "hidden",
    step >= 6 ? "text" : step === 5 ? "typing" : "hidden",
  ];
  const confirmed = step >= FINAL_STEP;

  return (
    <div className={styles.wrap} aria-hidden="true">
      <div className={styles.card}>
        <div className={styles.head}>
          <span className={styles.avatar}>
            <svg viewBox="0 0 24 24" width="18" height="18" fill="none">
              <path
                d="M12 3l1.9 5.1L19 10l-5.1 1.9L12 17l-1.9-5.1L5 10l5.1-1.9L12 3z"
                fill="currentColor"
              />
            </svg>
          </span>
          <div>
            <p className={styles.name}>Assistente virtual</p>
            <p className={styles.status}>
              <span className={styles.pulse} /> online agora
            </p>
          </div>
        </div>

        <div className={styles.thread}>
          {MESSAGES.map((message, index) => {
            const phase = phases[index];
            return (
              <div key={index} className={styles.slot}>
                {/* Fantasma invisível: reserva a altura final da bolha para o card não mudar de tamanho. */}
                <div
                  className={`${styles.bubble} ${styles.ghost} ${
                    message.from === "ia" ? styles.ia : styles.cliente
                  }`}
                  aria-hidden="true"
                >
                  <span className={styles.text}>{message.text}</span>
                </div>
                <div
                  className={`${styles.bubble} ${
                    message.from === "ia" ? styles.ia : styles.cliente
                  } ${phase !== "hidden" ? styles.in : ""} ${
                    phase === "typing" ? styles.isTyping : ""
                  }`}
                >
                  <span className={styles.text}>{message.text}</span>
                  <span className={styles.dots}>
                    <i />
                    <i />
                    <i />
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        <div className={`${styles.confirm} ${confirmed ? styles.in : ""}`}>
          <span className={styles.check}>
            <svg viewBox="0 0 24 24" width="14" height="14" fill="none">
              <path
                d="M5 12.5l4.2 4.2L19 7"
                stroke="currentColor"
                strokeWidth="2.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
          <span>
            <strong>Hoje, 16h00</strong> · Corte e barba
          </span>
        </div>
      </div>
    </div>
  );
}
