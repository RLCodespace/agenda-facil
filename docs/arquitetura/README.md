# Arquitetura do agenda-facil

Documento vivo, atualizado junto com o usuario a cada decisao — nao e
uma especificacao fechada, e o registro das conversas de arquitetura do
projeto.

## O produto

Sistema de agendamento com atendimento via I.A pra pequenos negocios
(barbearia, salao, etc), self-hosted, integrado ao WhatsApp via WAHA.
Fluxo central: agendamento, horarios disponiveis, cancelamento. O
agenda-facil **nao processa nem gerencia pagamento** — isso fica sempre
por conta do proprio dono do negocio.

## Indice

- [`regras-de-negocio.md`](./regras-de-negocio.md) — regras do motor de
  agendamento (conflito de horario, cancelamento, financeiro, cadastro
  de clientes). Varias secoes ainda estao em aberto, marcadas
  explicitamente.
- [`seguranca.md`](./seguranca.md) — recomendacoes de seguranca
  (LGPD, autenticacao do painel, integracao WAHA, multi-tenant).
- [`testes.md`](./testes.md) — estrategia de teste (enfase em
  End-to-End, por causa do risco de prejuizo real em erro de
  agendamento).
- [`checkpoint.md`](./checkpoint.md) — retrato do que ja foi feito, o
  que esta em aberto, e os proximos passos sugeridos.
