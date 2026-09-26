# Decisoes: nuvem propria, I.A com cota e anti-abuso

Registro do brainstorm de 2026-09-26. Nada aqui esta implementado. O que
ainda nao foi decidido esta marcado como **em aberto**.

## Decidido

### Hospedagem
- O sistema **nao e self-hosted**. Roda na nuvem da equipe. Motivo:
  elimina pirataria, bypass de licenca e vazamento da chave da I.A (o
  codigo nunca sai do nosso servidor).
- Consequencia: a plataforma vira um alvo unico com todos os tenants
  dentro, entao o foco de seguranca e proteger a propria plataforma
  (ver [`seguranca.md`](./seguranca.md)).

### Atores
- **Cliente** do produto = a empresa (barbearia, salao etc), o tenant.
- **Cliente final** = quem agenda. Fala com a I.A **somente por
  WhatsApp**. A identidade dele e o **numero de telefone**, ja verificado
  pelo WhatsApp: nao existe login, senha nem OTP pro cliente final.
- O cliente final so enxerga os **proprios** agendamentos.

### Banco de dados
- Nosso, **compartilhado entre tenants com Row Level Security** (opcao
  recomendada, a confirmar antes de implementar).
- Banco por negocio fica como caminho de migracao pra cliente grande.
- Banco no cliente foi descartado: piora suporte, backup e impede o
  gateway de I.A de alcançar os dados.

### WhatsApp
- **WAHA** (nao oficial), decisao do usuario, escolhido por custo e
  rapidez.
- Risco aceito: a Meta pode banir o numero, e a sessao do WAHA e um alvo
  de sequestro.
- Mitigacoes obrigatorias:
  - Interface `WhatsAppProvider`: o resto do sistema nunca conhece o
    WAHA. Trocar por WhatsApp Cloud API (oficial) fica sem reescrita.
  - WAHA em rede privada, sem porta publica, com API key forte.
  - Webhook validado por HMAC/secret.
  - Sessoes em volume criptografado, com backup.
  - Uma sessao por tenant, isolada.
  - Anti-ban: so responde a quem escreveu primeiro, sem disparo em
    massa, intervalo humano entre mensagens. Lembretes so com
    consentimento registrado.
  - Onboarding: dono usa numero dedicado ao negocio.
  - Monitoramento: se a sessao cair e pedir novo QR, alertar o dono.

### I.A: quem paga e como limitar
- I.A **incluida no plano**, com cota mensal de tokens por tenant. O
  custo e nosso.
- O app **nunca chama a API da I.A direto**. Existe um **gateway de I.A**
  proprio, unica porta pro modelo: guarda a chave, mede token por tenant
  e aplica limites. Ninguem contorna a cota mexendo no cliente.
- Cota ajustavel pelo plano contratado (upgrade sobe o limite na hora,
  sem deploy) e por bonus manual (override por tenant), com log de quem
  alterou.
- Alertas ao dono em 70% e 90% da cota.
- **Ao estourar a cota** (comportamento configuravel por tenant):
  - (a) modo degradado: menu fixo com botoes, sem I.A. Funciona sem
    gastar token.
  - (b) parar de responder e avisar o dono.
  - (c) excedente cobrado automaticamente, opcao que o dono liga no
    painel, com teto em R$ por mes.
- Precificar o plano assumindo que toda empresa pode usar 100% da cota.

### Modelo de dados previsto (tokens)
- `plans`: nome, tokens por mes, limite de mensagens por cliente final
  por dia, se permite excedente.
- `tenants`: `plan_id`, override de tokens, comportamento ao estourar,
  teto de excedente em R$.
- `token_usage`: tenant, hash do cliente, modelo, tokens de entrada,
  saida e cache, custo estimado, data. Somente insercao (base de
  auditoria e cobranca).
- `tenant_quota_period`: tenant, mes, tokens usados e limite, com
  contador atomico.

### Fluxo do gateway de I.A
1. Recebe tenant e cliente ja autenticados pelo backend.
2. Checa suspensao, rate limit e limite diario, sem gastar token.
3. Reserva um teto estimado de tokens da cota e recusa se passar.
4. Chama o modelo com historico truncado, prompt curto com cache,
   `max_tokens` baixo e limite de tool calls por turno.
5. Ajusta o uso real a partir do campo `usage` da resposta, em
   transacao.
6. Em 100% da cota, aplica o comportamento configurado.

### Abuso de mensagens (flood contra a I.A)
Tudo abaixo roda antes da I.A, sem custo de token:
- Rate limit por numero (ex: 10 msgs/min, 60/h) e limite diario por
  cliente final (ex: 50/dia). Valores a calibrar.
- Tamanho maximo de mensagem (~500 caracteres), so texto, debounce que
  agrupa mensagens seguidas e ignora repetidas.
- Escopo fechado: a I.A so trata de agendamento. Pedido fora do escopo
  recebe recusa curta.
- Escalonamento:
  1. Limite atingido: **uma unica** mensagem fixa (template, sem I.A)
     avisando pra parar, senao o atendimento sera suspenso.
  2. Insistiu: suspende aquele numero por **24h naquela empresa**. Depois
     disso, **silencio total** (responder alimentaria o abuso e pode
     gerar marcacao de spam).
  3. Dono e avisado no painel e pode levantar a suspensao.
  4. Reincidencia: 2a suspensao 7 dias, 3a bloqueio ate o dono liberar.
- A suspensao vale so pro chat com I.A. Agendamentos ja existentes
  continuam validos.
- Cliente legitimo que manda varias mensagens curtas nao pode ser
  punido: o limite conta chamadas de I.A e mensagens por minuto, nao
  frases soltas.
- Quem troca de numero contorna suspensao por numero, entao o **teto por
  tenant** e a defesa final.
- Um classificador barato pode filtrar mensagens antes do modelo
  principal, mas tambem custa token e tambem pode ser enganado por
  injection: **complementa**, nao substitui rate limit e teto.

### Prompt injection (principio)
Nao existe prompt que bloqueie injection de forma confiavel. Desenho
limita o estrago quando ela funciona. Detalhes em
[`seguranca.md`](./seguranca.md).

### Agendamento falso e no-show
Objetivo: quem reserva sem intencao de ir perde o horario sozinho, sem
custo pro dono.
- **Lembretes em 48h, 24h e 2h antes**, exigindo resposta "confirmo".
  Template fixo, sem I.A, disparado pelo worker/fila.
- Agendamento feito com menos de 48h de antecedencia pula os lembretes
  que ja passaram.
- **Sem confirmacao ate o prazo limite, o horario e liberado** e volta
  pra agenda. O cliente e avisado da liberacao.
- Consentimento pra receber lembretes e registrado no primeiro
  agendamento.
- Limites de prevencao: maximo de agendamentos ativos por numero (padrao
  proposto: 2), limite de antecedencia configuravel, cliente novo com 1
  ativo por vez.
- Tabelas previstas: `lembretes` (agendamento, tipo 48h/24h/2h, status,
  enviado em), `agendamentos.confirmado_em` e marca de liberacao por
  falta de confirmacao.

### Seguranca por agent especializado
Ao desenhar/implementar seguranca, delegar a agent especializado com
pesquisa web sobre vazamentos, fraude, engenharia reversa e injection.

## Em aberto
- **Prazo limite exato** da liberacao sem confirmacao (proposta: se nao
  confirmou ate o lembrete de 2h, libera; configuravel por negocio).
- **Padrao pra cliente novo**: agenda livre com 1 ativo e confirmacao
  obrigatoria, ou aprovacao manual do dono. Recomendacao: configuravel
  por negocio, padrao agenda livre.
- **Estrutura dos planos**: quantos planos, tokens de cada um, preco.
  Medir custo real com conversas de teste antes de precificar.
- Valores exatos dos rate limits e da cota diaria por cliente final.
- Confirmacao do **banco compartilhado com RLS** (opcao A).
- Comportamento padrao ao estourar a cota (a ou b) pra tenants que nao
  escolherem.

## Fase seguinte (fora do primeiro escopo)
Financeiro do dono, cobranca automatica de excedente (so o campo/opcao
entra antes), score de comparecimento por numero com bloqueio de
reincidentes, alerta de ataque (pico de agendamentos novos), sinal/
deposito via Pix do proprio dono (o sistema continua sem processar
pagamento), suspensao de abuso completa.

## Impacto no repo
- `next.config.ts` usa `output: "export"` (site estatico). Precisa
  sair pra ter servidor, auth e API routes.
- Migrations previstas em `supabase/migrations/` (caminho ja esperado
  pelo `docker-compose.yml`).
