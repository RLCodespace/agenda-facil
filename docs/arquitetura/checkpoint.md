# Checkpoint — planos futuros

Retrato do estado do projeto pra retomar entre sessoes sem perder o
fio. Atualizar a cada avanco relevante.

## Feito

- **Site institucional** (`src/app/(site)/`): Home, Precos, Sobre,
  Contato. Copy revisada pra falar so do essencial/diferencial (I.A que
  atende e agenda sozinho), sem expor detalhe de implementacao
  (canal/infra) — inclusive metadata de SEO.
- **Hero da Home**: card de conversa (`HeroConversation`) mostrando um
  agendamento real por I.A, fundo monocromatico discreto (dot-grid em
  `--color-hairline`, sem cor viva — ja passou por 3 iteracoes ate
  chegar num visual que o usuario aprovou).
- **Layout do painel interno** (`src/app/painel/`): Dashboard,
  Agendamentos, Financeiro, Clientes — UI/mock, sem dado real, sidebar +
  topbar responsivos.
- **Tokens de design** (`src/app/tokens.css`): cor, espaco, tipografia,
  raio, sombra — reaproveitados no site e no painel, base pra manter
  tudo consistente daqui pra frente.

## Em aberto (bloqueia implementacao funcional)

- As 5 secoes "a definir" de
  [`regras-de-negocio.md`](./regras-de-negocio.md): modelo de agenda (1
  vs N profissionais), regra de cancelamento/remarcacao, horario de
  funcionamento/excecoes, calculo exato do financeiro, validacao de
  cadastro de cliente.
- Confirmacao das recomendacoes de
  [`seguranca.md`](./seguranca.md) (LGPD, auth, WAHA, multi-tenant).

## Nao comecado

- Autenticacao e protecao real das rotas `/painel` (hoje sao publicas,
  so tem UI).
- Banco de dados: `docker-compose.yml` ja referencia
  `supabase/migrations`, mas essa pasta ainda nao existe no repo.
- Integracao com WAHA/WhatsApp de verdade.
- Agente de I.A com gestao de contexto/limite de tokens.

## Proximos passos sugeridos (em ordem)

1. Fechar as regras de negocio em aberto (conversa dedicada).
2. Desenhar o schema de dados (tenant, agenda/profissional, cliente,
   agendamento) a partir dessas regras.
3. Autenticacao do painel (Supabase Auth, proposto em `seguranca.md`).
4. Integracao WAHA.
5. Agente de I.A.
