# Estrategia de testes

O usuario foi explicito: erro nas regras de agendamento pode gerar
**prejuizo real** pro dono do negocio (overbooking, cancelamento
indevido, cliente perdido). Por isso a exigencia e testes
**End-to-End**, nao so unitario.

## Principio

Para qualquer regra de negocio (ver
[`regras-de-negocio.md`](./regras-de-negocio.md)), o teste precisa
cobrir o fluxo completo — do estimulo inicial ate o estado final
persistido e refletido no painel — antes dessa regra ir pra producao:

- Estimulo: mensagem simulada de cliente via WAHA, **ou** acao no
  painel (o dono tambem pode criar/cancelar agendamento manualmente).
- Fim: estado correto no banco + reflexo correto no painel
  (`/painel/agendamentos`, `/painel/clientes`, `/painel/financeiro`).

TDD antes da implementacao das regras (skills disponiveis no ambiente:
`superpowers:test-driven-development`, `everything-claude-code:e2e`).

## Casos criticos a cobrir (quando as regras forem fechadas)

- Dois agendamentos disputando o mesmo horario (conflito) — o sistema
  tem que recusar um dos dois, nunca aceitar os dois.
- Cancelamento dentro e fora do prazo minimo (quando essa regra for
  definida).
- Tentativa de agendamento em horario de excecao (feriado/folga).
- Duplicidade de cliente pelo numero de telefone.

## Status

Nenhum teste existe ainda — o motor de regras de agendamento tambem
ainda nao foi implementado. Essa estrategia serve de guia pra quando a
implementacao comecar.
