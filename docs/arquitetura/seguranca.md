# Seguranca

O usuario marcou seguranca como prioridade alta, com 4 areas — todas
importam igualmente. O que segue e uma **proposta tecnica inicial**,
a confirmar/ajustar antes de qualquer implementacao.

## Dados pessoais do cliente (LGPD)

- Minimizacao: coletar so o necessario pro agendamento (nome, telefone).
  Nada de dado sensivel sem necessidade clara.
- Papeis: o dono do negocio e o **controlador** dos dados dos proprios
  clientes; o agenda-facil atua como **operador** (processa em nome do
  negocio).
- Retencao: definir prazo de guarda (proposta: expurgar/anonimizar dado
  de cliente sem agendamento novo apos um periodo, ex: 24 meses — valor
  exato a confirmar).
- Precisa de: politica de privacidade, e um canal pro cliente final
  solicitar exclusao do proprio dado.

## Autenticacao do painel (dono do negocio)

- Rotas `/painel` **sempre** protegidas por verificacao server-side
  (middleware do Next.js) — nunca confiar so em checagem client-side.
- Sessao com expiracao e renovacao (refresh token rotacionado).
- Rate limit de tentativa de login (bloqueio temporario apos N
  tentativas erradas).
- Candidato natural: **Supabase Auth** (JWT + Row Level Security),
  ja que o Postgres via Supabase esta referenciado no
  `docker-compose.yml` do projeto.
- MFA: recomendado como opcao, dado que a conta acessa dados pessoais de
  clientes.

## Integracao WAHA / WhatsApp

- Validar origem do webhook do WAHA (secret compartilhado / HMAC) —
  nunca aceitar payload sem verificar assinatura/token.
- Rate limit por numero de telefone, pra evitar abuso/flood contra a
  I.A (isso tambem protege o orcamento de tokens da I.A).
- Mapeamento explicito `numero WAHA <-> tenant`: o tenant de um
  agendamento nunca pode ser inferido so pelo conteudo da mensagem, tem
  que vir de um mapeamento confiavel armazenado no banco.

## Isolamento multi-tenant

- Toda tabela relevante carrega `tenant_id`/`business_id`.
- Isolamento reforcado por **Row Level Security** no Postgres — nao
  confiar so em filtro `WHERE tenant_id = ...` na aplicacao.
- O tenant de uma requisicao **sempre** vem da sessao autenticada,
  nunca de um campo enviado pelo client (evita um negocio manipular
  request e enxergar/alterar dado de outro).

## Status

Proposta inicial, ainda nao implementada — nenhum codigo de auth,
schema ou middleware existe no repo ainda. Ver
[`checkpoint.md`](./checkpoint.md) pra ordem sugerida de implementacao.
