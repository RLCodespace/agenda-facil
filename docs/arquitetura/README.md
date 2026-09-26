# Arquitetura do agenda-facil

Documento vivo, atualizado junto com o usuario a cada decisao — nao e
uma especificacao fechada, e o registro das conversas de arquitetura do
projeto.

## O produto

Sistema de agendamento com atendimento via I.A pra pequenos negocios
(barbearia, salao, etc), **hospedado na nuvem da equipe** (nao e
self-hosted), integrado ao WhatsApp via WAHA. O cliente final fala com a
I.A somente por WhatsApp.
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
- [`decisoes-nuvem-ia.md`](./decisoes-nuvem-ia.md) — decisoes de
  hospedagem, gateway de I.A com cota por plano, anti-abuso, lembretes
  e no-show, WAHA e seus riscos. Inclui os pontos em aberto.
- [`testes.md`](./testes.md) — estrategia de teste (enfase em
  End-to-End, por causa do risco de prejuizo real em erro de
  agendamento).
